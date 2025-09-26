import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/90 opacity-85"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Innovating Through
            <span className="block text-blue-500"> People, Process & Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We empower organizations to modernize their digital infrastructure, 
            migrate to the cloud, and build innovative solutions that drive real business value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
             href={'/services'}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
            >
            <span className="flex items-center">
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            </Button>
            </Link>
            
            <Link
             href={'#team'}>
            <Button 
              variant="default" 
              size="lg"
              className="border-white/30 text-white px-8 py-4 text-lg font-semibold"
            >
              Meet Our Team
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-px h-12 bg-white/40 mb-2"></div>
          <span className="text-sm font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;