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
          image="https://readdy.ai/api/search-image?query=Bright%20documentary%20photograph%20of%20a%20tidy%20wooden%20baseball%20dugout%20with%20red%20equipment%20bags%20and%20bats%20leaning%20against%20the%20railing%2C%20sunlit%20bench%2C%20crisp%20shadows%2C%20clean%20white%20and%20red%20details%2C%20warm%20daylight%2C%20editorial%20sports%20photography%2C%20high%20detail%2C%20no%20text&width=1920&height=900&seq=medvednica-contact-hero-day-07&orientation=landscape"
          imageAlt="The Medvednica dugout before a game"
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