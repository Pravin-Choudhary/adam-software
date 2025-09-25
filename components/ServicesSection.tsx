import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import dataIcon from "@/assets/data-modernization-icon.png";
import cloudIcon from "@/assets/cloud-migration-icon.png";
import appIcon from "@/assets/app-modernization-icon.png";
import servicesIcon from "@/assets/professional-services-icon.png";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      id: "data-modernization",
      title: "Data Asset Modernization",
      description: "Transform your data infrastructure with modern analytics platforms, AI-driven insights, and scalable data architectures that unlock business value.",
      icon: dataIcon,
      features: ["Data Migration", "Analytics Platforms", "AI Integration", "Real-time Processing"]
    },
    {
      id: "cloud-migration",
      title: "Cloud Migration",
      description: "Seamlessly transition to cloud platforms with our proven methodologies, ensuring minimal downtime and maximum performance optimization.",
      icon: cloudIcon,
      features: ["AWS/Azure/GCP", "Zero-Downtime Migration", "Cost Optimization", "Security First"]
    },
    {
      id: "app-modernization",
      title: "Application Modernization",
      description: "Modernize legacy applications with microservices, containerization, and cloud-native architectures for enhanced scalability and performance.",
      icon: appIcon,
      features: ["Microservices", "Containerization", "DevOps Integration", "Performance Tuning"]
    },
    {
      id: "professional-services",
      title: "Professional Services",
      description: "Expert consulting and staffing solutions to accelerate your digital transformation journey with the right talent and strategic guidance.",
      icon: servicesIcon,
      features: ["IT Consulting", "Staff Augmentation", "Project Management", "Strategic Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions that drive innovation, 
            efficiency, and growth for organizations of all sizes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-light px-8 py-4 text-lg font-semibold">
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;