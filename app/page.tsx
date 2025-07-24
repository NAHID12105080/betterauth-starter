import Features from "@/components/features-1";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
    </main>
  );
}
