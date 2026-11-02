"use client";
import React, { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { executeRecaptcha, lazyLoadRecaptcha } from "@/utils/recaptcha";
import { fetchDefaultPhoneCountryIso } from "@/utils/phoneDefaultCountry";
import { pushLeadSubmitted } from "@/utils/analytics";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE_MB = 5;
const MAX_FILES = 5;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

const projectTypeOptions = [
  "App development",
  "Web development",
  "Software Development",
  "AI Development",
  "Other",
];

const budgetOptions: { label: string; min: number | null; max: number | null }[] = [
  { label: "< 5,000 USD", min: 0, max: 5000 },
  { label: "5,000 to 10,000 USD", min: 5000, max: 10000 },
  { label: "10,000 to 20,000 USD", min: 10000, max: 20000 },
  { label: "20,000 to 30,000 USD", min: 20000, max: 30000 },
  { label: "30,000 to 40,000 USD", min: 30000, max: 40000 },
  { label: "40,000 to 50,000 USD", min: 40000, max: 50000 },
  { label: "50,000 to 100,000 USD", min: 50000, max: 100000 },
  { label: "100,000 to 250,000 USD", min: 100000, max: 250000 },
  { label: "250,000 USD +", min: 250000, max: null },
  { label: "Still Evaluating", min: null, max: null },
];

const TopFormContact = ({ isUsedInModal = false, isUsedInSolutions = false, isUsedInServices = false, onClose, isUsedInContactTop = false, formName = "contact_top" }: { isUsedInModal?: boolean; isUsedInSolutions?: boolean; isUsedInServices?: boolean; onClose?: () => void; isUsedInContactTop?: boolean; formName?: string }) => {
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    budget: "",
    message: "",
    captcha_token: "",
    source_url: "",
  });

  const [honeypot, setHoneypot] = useState("");

  const [phoneCountryIso, setPhoneCountryIso] = useState<string>("in");
  const phoneValueRef = useRef("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const totalFiles = selectedFiles.length + filesArray.length;
      if (totalFiles > MAX_FILES) {
        toast.error(`You can only upload up to ${MAX_FILES} files.`);
        return;
      }
      const validFiles: File[] = [];
      const fileErrors: string[] = [];
      filesArray.forEach((file) => {
        const isValidType = ALLOWED_FILE_TYPES.includes(file.type);
        const isValidSize = file.size / (1024 * 1024) <= MAX_FILE_SIZE_MB;
        if (!isValidType) {
          fileErrors.push(`${file.name} has unsupported file type.`);
        } else if (!isValidSize) {
          fileErrors.push(`${file.name} exceeds 5MB limit.`);
        } else {
          validFiles.push(file);
        }
      });
      if (fileErrors.length) {
        toast.error(fileErrors.join("\n"));
      }
      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  };
  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  };
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!isUsedInSolutions && formData.phone.trim()) {
      if (!/^\+?[1-9]\d{6,14}$/.test(formData.phone)) {
        newErrors.phone = "Invalid phone number format.";
      }
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    const firstInvalid = ["name", "email", "phone", "message"].find(
      (field) => newErrors[field]
    );
    if (firstInvalid) {
      requestAnimationFrame(() => {
        const el = formRef.current?.querySelector<HTMLElement>(
          `[name="${firstInvalid}"]`
        );
        el?.scrollIntoView({ block: "center", behavior: "smooth" });
        el?.focus({ preventScroll: true });
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const disposeRecaptcha = lazyLoadRecaptcha(formRef.current);
    router.prefetch("/thanks");
    return disposeRecaptcha;
  }, [router]);

  const rendersPhoneInput = !isUsedInSolutions && !isUsedInServices;

  useEffect(() => {
    if (!rendersPhoneInput) return;

    let cancelled = false;
    let started = false;

    const start = () => {
      if (started || cancelled) return;
      started = true;
      cleanup();
      void fetchDefaultPhoneCountryIso().then((iso) => {
        if (!cancelled && !phoneValueRef.current) setPhoneCountryIso(iso);
      });
    };

    const events = ["pointerdown", "keydown", "touchstart", "focusin"] as const;
    const cleanup = () => {
      for (const e of events) document.removeEventListener(e, start);
    };
    for (const e of events) {
      document.addEventListener(e, start, { passive: true, once: false });
    }

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [rendersPhoneInput]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim() !== "") {
      toast.success(
        <div className="toast_div_success">
          <div className="success-Heading">Success</div>
          <div className="toastMessage">
            <span className="Toast--Black">
              Thank you! We&apos;ve got your message.
            </span>
          </div>
        </div>,
        { position: "top-right" }
      );
      router.push("/thanks");
      return;
    }

    if (!validate()) return;
    setSubmitting(true);

    try {
      const token = await executeRecaptcha("submit");

      if (!token) {
        toast.error("Captcha verification failed!");
        setSubmitting(false);
        return;
      }
      const formPayload = new FormData();
      const fieldsToAppend = ["name", "email", "message", "captcha_token", "source_url"];
      if (!isUsedInSolutions) {
        fieldsToAppend.push("phone", "country", "industry");
      }
      Object.entries(formData).forEach(([key, value]) => {
        if (!fieldsToAppend.includes(key)) return;
        if (key === "budget" || key === "captcha_token" || key === "source_url") return;
        formPayload.append(key, value as string);
      });
      formPayload.append("source_url", window.location.href);
      if (!isUsedInSolutions) {
        const selected = budgetOptions.find((o) => o.label === formData.budget);
        const asField = (v: number | null | undefined) =>
          v === null || v === undefined ? "" : String(v);
        formPayload.append("min_budget", asField(selected?.min));
        formPayload.append("max_budget", asField(selected?.max));
        selectedFiles.forEach((file) => {
          formPayload.append("contactfile_set", file);
        });
      }
      formPayload.append("captcha_token", token);
      formPayload.append("captcha_type", "v3");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contacts/`,
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status !== 201) {
        throw new Error("Unexpected status");
      }

      pushLeadSubmitted(formName);

      toast.success(
        <div className="toast_div_success">
          <div className="success-Heading">Success</div>
          <div className="toastMessage">
            <span className="Toast--Black">
              Thank you! We&apos;ve got your message.
            </span>
          </div>
        </div>,
        { position: "top-right" }
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        industry: "",
        budget: "",
        message: "",
        captcha_token: "",
        source_url: typeof window !== "undefined" ? window.location.href : "",
      });
      setSelectedFiles([]);
      setErrors({});
      recaptchaRef.current?.reset();
      if (isUsedInModal && onClose) {
        onClose();
      }
      router.push("/thanks");
    } catch {
      // Keep the form filled on purpose: making the visitor retype loses the lead.
      toast.error(
        <div className="toast_div_error">
          <div className="success-Heading">Error</div>
          <div className="toastMessage">
            <span className="Toast--Black">
              We couldn&apos;t send your message. Please try again or email us
              directly.
            </span>
          </div>
        </div>,
        { position: "top-right" }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${isUsedInModal ? "" : " border border-gray-100 md:border-l-0"} ${isUsedInSolutions ? "rounded-3xl md:w-1/3 mx-auto" : "rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"} w-full md:w-1/2 bg-white p-4 md:p-8 ${isUsedInContactTop ? "rounded-3xl!" : ""} ${isUsedInServices ? "rounded-3xl! lg:w-full!" : ""}`}
    >
      {isUsedInServices ? <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${isUsedInModal ? "pr-14" : ""}`}>
        Get Your Free Consultation & We&apos;ll Reach Out Promptly!
      </h3> : <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isUsedInModal ? "pr-14" : ""}`}>
          Get Your Free Quote & We&apos;ll Reach Out Promptly!
        </h3>
      }
      <form
        className="sm:space-y-4 space-y-2"
        onSubmit={handleSubmit}
        noValidate
        ref={formRef}
      >
        <div aria-hidden="true" style={{ display: "none" }}>
          <label htmlFor="hp-website">Website</label>
          <input
            id="hp-website"
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Name <span className="text-[#FF0044]">*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className={`w-full border rounded-md bg-gray-100 py-2 px-3 text-sm outline-none ${errors.name
              ? "border-red-500"
              : focusedInput === "name"
                ? "border-gray-200"
                : "border-transparent"
              }`}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            E-mail <span className="text-[#FF0044]">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Type your e-mail address"
            aria-invalid={!!errors.email}
            className={`w-full border rounded-md bg-gray-100 py-2 px-3 text-sm outline-none ${errors.email
              ? "border-red-500"
              : focusedInput === "email"
                ? "border-gray-200"
                : "border-transparent"
              }`}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        {!isUsedInSolutions && !isUsedInServices && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Phone Number{" "}
                <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <PhoneInput
                key={phoneCountryIso}
                country={phoneCountryIso}
                enableSearch
                value={formData.phone}
                onChange={(phone: string, country: CountryData) => {
                  phoneValueRef.current = phone;
                  setFormData((prev) => ({
                    ...prev,
                    phone,
                    country: country?.name || "",
                  }));
                }}
                placeholder="Enter your phone number"
                inputProps={{
                  name: "phone",
                  onFocus: () => setFocusedInput("phone"),
                  onBlur: () => setFocusedInput(null),
                }}
                containerClass="!w-full"
                inputClass={`!w-full !bg-gray-100 !text-sm !py-2 !pl-14 !pr-3 !rounded-md !outline-none !border transition-all duration-200 ${errors.phone
                  ? "!border-red-500"
                  : focusedInput === "phone"
                    ? "!border-gray-300"
                    : "!border-transparent"
                  }`}
                dropdownStyle={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                }}
                buttonClass="!border-transparent !bg-transparent hover:!bg-gray-200 transition-colors duration-150"
                dropdownClass="!z-50"
                searchClass="!border-transparent !bg-gray-100 !text-sm !outline-none !w-full"
                searchPlaceholder="Search country..."
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            </>
        )}
        {!isUsedInSolutions && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="industry" className="sr-only">
                  Project Type
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleSelectChange}
                  onFocus={() => setFocusedInput("industry")}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full border rounded-md bg-gray-100 py-2 px-3 text-sm outline-none ${
                    focusedInput === "industry"
                      ? "border-gray-200"
                      : "border-transparent"
                    }`}
                >
                  <option value="" disabled className="text-black">
                    Project Type
                  </option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="sr-only">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleSelectChange}
                  onFocus={() => setFocusedInput("budget")}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full border rounded-md bg-gray-100 py-2 px-3 text-sm outline-none ${
                    focusedInput === "budget"
                      ? "border-gray-200"
                      : "border-transparent"
                    }`}
                >
                  <option value="" disabled className="text-black">
                    Expected Budget
                  </option>
                  {budgetOptions.map(({ label }) => (
                    <option key={label} value={label} className="text-black">
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            </>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Message <span className="text-[#FF0044]">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Share Project Details / Overview of Your Idea (Help Us Come Back Stronger)"
            className={`w-full rounded-md bg-gray-100 py-2 px-3 text-sm outline-none resize-none border ${errors.message
              ? "border-red-500"
              : focusedInput === "message"
                ? "border-gray-200"
                : "border-transparent"
              }`}
            onFocus={() => setFocusedInput("message")}
            onBlur={() => setFocusedInput(null)}
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        {!isUsedInSolutions && !isUsedInServices && (
          <>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <label className="block text-sm font-medium text-gray-800">
                  Attach Files:
                </label>
                <input
                  type="file"
                  id="multiFileUpload"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
                {selectedFiles.length < MAX_FILES ? (
                  <label
                    htmlFor="multiFileUpload"
                    className="border border-gray-300 transition-colors px-2 py-[2px] rounded-md flex items-center gap-2 cursor-pointer text-gray-800 text-[13px] hover:bg-gray-100"
                  >
                    <FiUploadCloud size={16} />
                    Upload here
                  </label>
                ) : (
                  <span className="text-sm text-gray-500 py-[2px]">
                    {MAX_FILES - selectedFiles.length} file
                    {MAX_FILES - selectedFiles.length > 1 ? "s" : ""} remaining
                  </span>
                )}
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700">
                  {selectedFiles.map((file, index) => {
                    const nameParts = file.name.split(".");
                    const ext = nameParts.pop();
                    const baseName = nameParts.join(".");

                    return (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-2 rounded-md max-w-[300px] hover:bg-gray-200 transition-colors h-[28px]"
                      >
                        <div className="flex items-center gap-1 max-w-[240px] overflow-hidden">
                          <div className="shrink-0 flex items-center">
                            <span
                              className="text-[12px] leading-5 block overflow-hidden whitespace-nowrap text-ellipsis max-w-[100px]"
                              title={file.name}
                            >
                              {baseName}
                            </span>
                            <span className="text-[12px] leading-5">.{ext}</span>
                          </div>
                          <span className="text-gray-500 text-xs whitespace-nowrap leading-5 ml-1">
                            (
                            {file.size >= 1024 * 1024
                              ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
                              : `${(file.size / 1024).toFixed(1)} KB`}
                            )
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors ml-2 shrink-0"
                        >
                          <IoClose size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
        <div className="flex items-start gap-2 mt-2">
          <p className="text-[12px] leading-5 text-[#364153]">
            By submitting this form, I authorize Zyneto to collect and process
            my personal data in accordance with the
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-blue-600 underline ml-1"
            >
              Zyneto Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="gradient-bg-btn rounded-full"
            disabled={submitting}
          >
            {submitting
              ? "Submitting..."
              : isUsedInServices
                ? "Get Your Free Consultation"
                : "Get Your Free Quote"}
          </button>
          <p className="mt-2 text-xs text-gray-500">
            We respond to all inquiries within 1 hour.
          </p>
        </div>
      </form>
    </div>
  );
};

export default TopFormContact;
