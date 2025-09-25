import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navigation-Bar";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <NavigationBar/>
      <HeroSection />
      <section id="service">
      <ServicesSection />
      </section>
      <section id="team">
      <TeamSection />
      </section>
      <section id="careers">
      <CareersSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
