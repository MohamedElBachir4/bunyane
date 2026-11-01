import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/home/About";
import { BlockchainSection } from "@/components/home/BlockchainSection";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FAQ } from "@/components/home/FAQ";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { WhyBunyane } from "@/components/home/WhyBunyane";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <HowItWorks />
      <Ecosystem />
      <BlockchainSection />
      <WhyBunyane />
      <FAQ />
      <FinalCTA />
    </>
  );
}
