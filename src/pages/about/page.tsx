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
          eyebrow="Est. 1989 · Medvednica, Zagreb"
          title={
            <>
              A club built on
              <br />
              <span className="text-primary-500">the north slope.</span>
            </>
          }
          description="Nine friends, a borrowed glove and a patch of grass on the mountain. Thirty-seven seasons later we are four teams, a youth programme and a merch table that pays for the baseballs."
          image="/images/about-hero.jpg"
          imageAlt="The Medvednica club family gathered together"
          imageTitle="Medvednica Baseball Club | Our club family"
          stats={[
            { value: "1989", label: "Founded" },
            { value: "4", label: "Squads" },
            { value: "102", label: "Players" },
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
