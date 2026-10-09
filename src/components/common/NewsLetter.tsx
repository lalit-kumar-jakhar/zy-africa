"use client";
import { useEffect, useRef, useState } from "react";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
import StarIcon from "./StarIcon";
import { toast } from "react-toastify";
import { subscribeNewsletter } from "@/utils/server-function";
import { executeRecaptcha, lazyLoadRecaptcha } from "@/utils/recaptcha";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    return lazyLoadRecaptcha(formRef.current);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const token = await executeRecaptcha("submit");

      if (!token) {
        toast.error("Captcha verification failed!");
        return;
      }

      await subscribeNewsletter({ email, token });

      setMessage({ type: "success", text: "🎉 Successfully subscribed!" });
      setEmail("");
    } catch {
      setMessage({
        type: "error",
        text: "Failed to subscribe. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-100"
      style={{
        backgroundImage: `url(${fagGridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="text-center mx-auto rounded-2xl px-4 py-6 backdrop-blur-sm bg-white">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#000000" size={40} />
          </div>
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#111111] leading-tight">
            Get{" "}
            <span className="text-yellow-orange-gradient">
              Exclusive Insights
            </span>
          </h2>
          <p className="text-[#444444] mt-3 text-lg md:text-xl font-medium xl:max-w-4xl mx-auto">
            Be the first to access{" "}
            <span className="font-semibold text-black">
              expert strategies
            </span>
            , actionable tips, and the trends actually shaping the digital
            world. No fluff - just practical insights delivered straight to
            your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col items-center gap-4"
            ref={formRef}
          >
            <div className="flex w-full sm:max-w-xl rounded-full bg-gray-100 overflow-hidden shadow-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here..."
                className="flex-1 px-5 py-4 w-full outline-none text-gray-800 text-lg placeholder:text-lg placeholder:italic placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="gradient-bg-btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {message && (
              <p
                className={`text-sm mt-2 ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
