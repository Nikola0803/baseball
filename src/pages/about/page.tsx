import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/sections/PageHero";
import ClubStory from "@/components/sections/ClubStory";
import TeamsSection from "@/components/sections/TeamsSection";
import AboutValues from "@/pages/about/components/AboutValues";
import GallerySection from "@/components/sections/GallerySection";
import CtaBand from "@/components/sections/CtaBand";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <PageHero
          breadcrumb="About"
          eyebrow="Est. 1994 · Medvednica, Zagreb"
          title={
            <>
              A club built on
              <br />
              <span className="text-primary-500">the north slope.</span>
            </>
          }
          description="Nine friends, a borrowed glove and a patch of grass on the mountain. Thirty-two seasons later we are four squads, a free academy and a merch table that pays for the baseballs."
          image="https://readdy.ai/api/search-image?query=Wide%20bright%20photograph%20of%20an%20amateur%20baseball%20field%20at%20the%20edge%20of%20a%20green%20forested%20mountain%2C%20small%20wooden%20dugout%20and%20hand%20painted%20scoreboard%2C%20crisp%20white%20chalk%20lines%2C%20clear%20late%20afternoon%20light%2C%20clean%20natural%20colours%2C%20editorial%20landscape%20sports%20photography%2C%20high%20detail%2C%20no%20text&width=1920&height=900&seq=medvednica-about-hero-day-06&orientation=landscape"
          imageAlt="Medvednica Field at the edge of the forest"
          imageTitle="Medvednica Baseball Club | Our field on the north slope"
          stats={[
            { value: "1994", label: "Founded" },
            { value: "4", label: "Squads" },
            { value: "180+", label: "Players" },
          ]}
          note="Volunteer run · Zagreb, Croatia"
        />

        <ClubStory />
        <TeamsSection />
        <AboutValues />
        <GallerySection />

        <CtaBand
          eyebrow="Come down"
          title="Anybody can train with us."
          description="No experience, no equipment, no forms to fill in ahead of time. Turn up on a Tuesday, borrow a glove and see if the game sticks."
          primaryLabel="Message the club"
          primaryTo="/contact"
          secondaryLabel="See the schedule"
          secondaryTo="/#season"
        />
      </main>
      <Footer />
    </div>
  );
}