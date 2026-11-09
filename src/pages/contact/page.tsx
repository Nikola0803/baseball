import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactBlock from "@/components/sections/ContactBlock";
import FindUs from "@/pages/contact/components/FindUs";
import Faq from "@/pages/contact/components/Faq";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Contact"
          eyebrow="We answer every message"
          title={
            <>
              Come down
              <br />
              <span className="text-primary-500">to the field.</span>
            </>
          }
          description="Try a training session, order merch in a size that is not listed, put your company on the outfield fence or just ask when the next game is. A real person from the club replies."
          image="/images/contact-hero.jpg"
          imageAlt="Medvednica players in the dugout before a game"
          imageTitle="Contact Medvednica Baseball Club"
          stats={[
            { value: "12:30", label: "Gates open" },
            { value: "48h", label: "Reply time" },
            { value: "4", label: "Squads" },
          ]}
          note="Medvednica Field · Zagreb, Croatia"
        />

        <ContactBlock />
        <FindUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
