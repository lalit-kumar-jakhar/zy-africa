import FaqSection from "@/components/home/FaqSection/FaqSection";
import Testimonial from "@/components/home/Testimonials/Testimonials";
import AdvServices from "@/components/services/AdvServices";
import DevProcess from "@/components/solutions/DevProcess";
import SolutionTop from "@/components/solutions/SolutionTop";
import {
  DatingIncluded,
  DatingIntelligent,
  DatingPortfolio,
  DatingServices,
  DatingSolutions,
  DatingWhy,
} from "@/components/solutions/dating/DatingBlocks";
import {
  datingBudgetCta,
  datingFaqs,
  datingHero,
  datingHireCta,
  datingMarketCta,
  datingProcess,
} from "@/data/dating-page";
const DatingPage = () => (
  <>
    <SolutionTop heroSection={datingHero} />
    <DatingServices />
    <AdvServices advertisement={datingMarketCta} />
    <DatingIncluded />
    <DatingPortfolio />
    <AdvServices advertisement={datingBudgetCta} />
    <DatingIntelligent />
    <DatingSolutions />
    <DevProcess
      kicker={datingProcess.kicker}
      sectionTitle={datingProcess.sectionTitle}
      sectionDescription={datingProcess.sectionDescription}
      processSteps={datingProcess.processSteps}
      ctaText={datingProcess.ctaText}
    />
    <DatingWhy />
    <AdvServices advertisement={datingHireCta} />
    <FaqSection faqSection={datingFaqs} />
    <Testimonial />
  </>
);

export default DatingPage;
