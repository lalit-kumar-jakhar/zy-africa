import Image from "next/image";
import Link from "next/link";
import SquiggleArrow from "@/components/common/SquiggleArrow";
import { projects } from "@/data/portfolio";

const SHOWCASE_IDS = ["famepilot", "al-amri-express", "kroolo", "ndc", "stylebank"];

const FAN = [
  "xl:w-52 xl:-rotate-8 xl:translate-y-12 xl:z-0",
  "xl:w-60 xl:-rotate-4 xl:translate-y-4 xl:z-10",
  "xl:w-72 xl:z-20",
  "xl:w-60 xl:rotate-4 xl:translate-y-4 xl:z-10",
  "xl:w-52 xl:rotate-8 xl:translate-y-12 xl:z-0",
];

const showcase = SHOWCASE_IDS.map((id) => projects.find((p) => p.id === id)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p?.caseStudySlug),
);

const shortName = (title: string) => {
  const name = title.split(":")[0];
  return name.match(/\(([^)]+)\)/)?.[1] ?? name;
};

const HeroShowcase = () => (
  <div className="mt-12 md:mt-16">
    <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] xl:mx-0 xl:items-start xl:justify-center xl:gap-0 xl:overflow-visible xl:px-0 xl:pb-12">
      {showcase.map((project, index) => (
        <li
          key={project.id}
          className={`relative w-56 shrink-0 snap-center transition-[rotate,translate] duration-500 ease-out hover:z-30 xl:-mx-3 xl:hover:rotate-0 xl:hover:-translate-y-3 ${FAN[index]}`}
        >
          <Link
            href={`/case-studies/${project.caseStudySlug}`}
            className="group block overflow-hidden rounded-3xl border border-white/15 bg-[#14101C] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
          >
            <span className="relative block aspect-square">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1200px) 288px, 224px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span
                className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/40 to-transparent px-4 pt-10 pb-4 text-left ${
                  index > 2 ? "xl:text-right" : ""
                }`}
              >
                <span className="block text-[15px] font-semibold text-white">
                  {shortName(project.title)}
                </span>
                <span className="mt-0.5 block text-xs text-white/65">
                  {project.category} · {project.country}
                </span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>

    <Link
      href="/case-studies"
      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white xl:mt-2"
    >
      View all case studies
      <SquiggleArrow size="sm" className="text-[#ff732d]" />
    </Link>
  </div>
);

export default HeroShowcase;
