import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "@/pages/home/components/Hero";
import Ticker from "@/pages/home/components/Ticker";
import ClubIntro from "@/pages/home/components/ClubIntro";
import HonoursSection from "@/components/sections/HonoursSection";
import TeamsSection from "@/components/sections/TeamsSection";
import ManifestoBand from "@/components/sections/ManifestoBand";
import SeasonSection from "@/components/sections/SeasonSection";
import MerchPreview from "@/components/sections/MerchPreview";
import StoriesSection from "@/components/sections/StoriesSection";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ClubIntro />
        <HonoursSection />
        <TeamsSection />
        <ManifestoBand />
        <SeasonSection />
        <MerchPreview />
        <StoriesSection />
        <CtaBand
          title="The gate opens at 12:30."
          description="Come watch a game, bring a friend, try a training session. Members get the covered stand, a sticker pack and first pick of the merch table."
          primaryLabel="Get in touch"
          primaryTo="/contact"
          secondaryLabel="See the shop"
          secondaryTo="/shop"
        />
      </main>
      <Footer />
    </div>
  );
}