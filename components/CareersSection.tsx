import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Lightbulb, Rocket, Award } from "lucide-react";

const CareersSection = () => {
  const values = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work alongside brilliant minds in an environment that values diverse perspectives and innovative thinking."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Be at the forefront of technology, working with cutting-edge tools and methodologies to solve complex challenges."
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Accelerate your professional development with mentorship, training, and challenging projects that expand your skills."
    },
    {
      icon: Award,
      title: "Excellence Rewarded",
      description: "Your contributions matter. We recognize and reward exceptional performance with competitive compensation and benefits."
    }
  ];

  const openPositions = [
    {
      title: "Senior Cloud Architect",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Data Engineer",
      department: "Data Sciences",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Business Analyst",
      department: "Consulting",
      location: "Chicago, IL",
      type: "Full-time"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Are you ready to build the future of technology? Join our team of passionate 
            professionals who are transforming how businesses leverage technology to achieve their goals.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 bg-card border-border">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Current Opportunities
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {position.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500  rounded-full mr-2"></div>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Don't see the perfect role?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
            We're always looking for exceptional talent to join our team. 
            Send us your resume and let's discuss how you can contribute 
            to our mission of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-light px-8 py-4 text-lg font-semibold">
              Send Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;