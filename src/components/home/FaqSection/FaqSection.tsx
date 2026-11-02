import Image from "next/image";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";

const downArrow = "/static/assets/home/faq/down.svg";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
  plainTextAnswer?: string;
};

type FaqSectionProps = {
  faqSection?: FaqItem[];
};

export const defaultFaqs: FaqItem[] = [
  {
    question: "What does Zyneto actually build?",
    answer:
      "AI agents, copilots, RAG systems and workflow automation, plus the web and mobile products they run inside. Roughly a third of our services are AI, and the rest is the product engineering that turns a model into something your customers can use.",
  },
  {
    question: "We know we want AI but not which kind. Where do we start?",
    answer:
      "Start with the workflow, not the technology. Pick something expensive, repetitive and well understood, then describe what a good outcome looks like. That description tells us which kind of AI fits and becomes the yardstick the finished system is measured against. A scoping call usually settles it in one conversation.",
  },
  {
    question: "What is the difference between an AI agent, a copilot and a chatbot?",
    answer:
      "A chatbot answers questions. A copilot works alongside a person inside your product and leaves them in control. An agent completes multi-step work on its own, calling tools as it goes. Cost, risk and engineering effort rise in that order, so the right answer is the least autonomous option that solves your problem.",
  },
  {
    question: "How do we know whether a workflow needs AI at all?",
    answer:
      "If the rules can be written down and they hold, conventional software is cheaper, faster and more predictable. AI earns its cost where inputs are messy, unstructured or too varied to enumerate. Most workflows split, with AI handling the judgment steps and ordinary automation handling the rest, and we will tell you where that line falls before any build starts.",
  },
  {
    question: "How much does an AI project cost?",
    answer:
      "The build is driven mainly by how many systems the work touches, since integration is where most engineering time goes. Model usage is a separate ongoing cost that scales with volume. We size both during design, because a system that works well but costs more to run than the process it replaced has not succeeded.",
  },
  {
    question: "How long before we see something working?",
    answer:
      "A narrow prototype running against your real data typically takes a few weeks. Production hardening, meaning evaluation, guardrails, monitoring and edge cases, usually takes about as long again. We front-load a working prototype deliberately, because that is what surfaces the problems a specification will not.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes, and that integration is most of the project. We connect to the CRMs, ERPs, help desks, warehouses and internal APIs you already run, and we work with the authentication, rate limits and legacy behaviour of those systems as they actually are rather than as their documentation describes them.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Data security and compliance are built into every solution from the architecture stage. We define clear data boundaries, access controls, and infrastructure requirements based on each client’s needs. Our development practices are aligned with ISO 27001 and SOC 2 principles, with a focus on secure data handling, controlled access, privacy, and reliable infrastructure to help clients meet their security and compliance requirements.",
  },
  {
    question: "Who owns what you build?",
    answer:
      "You do. Code, prompts, evaluation datasets, infrastructure configuration and any fine-tuned artifacts transfer to you. There is no proprietary runtime and no requirement to keep us engaged in order to change how the system behaves.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We are headquartered in Jaipur and deliver worldwide, with clients across the United States, Europe and the Gulf. Our working day overlaps almost entirely with Gulf business hours and covers the European morning. For North American clients we agree a defined daily sync window at the start of the engagement.",
  },
];

const baseDelay = 100;

const FaqSection: React.FC<FaqSectionProps> = ({ faqSection }) => {
  const faqsToShow =
    faqSection && faqSection.length > 0 ? faqSection : defaultFaqs;

  return (
    <div
      className="bg-[#F9F9F9]"
      style={{
        backgroundImage: `url(${fagGridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:py-19 py-5.5">
        <div className="text-center mx-auto mb-8">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#000000" size={40} />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>
        <div className="mt-4 space-y-2 md:mt-12 w-full md:max-w-6xl mx-auto">
          {faqsToShow.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-300 rounded-lg bg-[#F9F9F9] open:bg-white"
              open={index === 0}
            >
              <summary
                className="w-full p-4 flex justify-between items-center text-left cursor-pointer select-none
                           [&::marker]:hidden [&::-webkit-details-marker]:hidden list-none"
              >
                <h3 className="text-[16px] lg:text-[18px] font-medium text-[#000000] pr-4">
                  {faq.question}
                </h3>
                <Image
                  src={downArrow}
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 group-open:-scale-y-100"
                />
              </summary>
              <p className="mb-4 text-[15px] md:text-[16px] text-[#4B5563] px-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
