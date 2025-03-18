
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import { 
  Layers, 
  Puzzle, 
  Users, 
  Zap, 
  Wind, 
  Globe,
  Play
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-16 bg-gradient-to-b from-figma-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-figma-gray-900">
              Design, prototype, and collaborate all in one place
            </h1>
            <p className="text-xl text-figma-gray-600 mb-8">
              The platform where teams create the world's best digital experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-figma-blue hover:bg-figma-blue/90 text-white">
                  Get started for free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
                See how it works
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-blur-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <div className="aspect-[16/9] relative bg-figma-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-figma-blue/10 to-figma-purple/10 z-0"></div>
              
              {/* Mockup UI that looks like Figma interface */}
              <div className="absolute inset-0 p-4 flex flex-col">
                <div className="h-10 bg-figma-gray-900 rounded-t-lg flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-figma-red"></div>
                    <div className="w-3 h-3 rounded-full bg-figma-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-figma-green"></div>
                  </div>
                  <div className="mx-auto text-white text-sm font-medium">Untitled - Figma Clone</div>
                </div>
                
                <div className="flex-1 bg-white flex">
                  {/* Left sidebar */}
                  <div className="w-12 bg-figma-gray-800 flex flex-col items-center py-4 space-y-6">
                    <div className="w-6 h-6 rounded bg-figma-blue"></div>
                    <div className="w-6 h-6 rounded bg-figma-gray-600"></div>
                    <div className="w-6 h-6 rounded bg-figma-gray-600"></div>
                    <div className="w-6 h-6 rounded bg-figma-gray-600"></div>
                  </div>
                  
                  {/* Main area */}
                  <div className="flex-1 flex">
                    {/* Toolbar */}
                    <div className="w-64 bg-figma-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-figma-gray-300 rounded-md w-full"></div>
                        <div className="h-24 bg-figma-gray-300 rounded-md w-full"></div>
                        <div className="h-36 bg-figma-gray-300 rounded-md w-full"></div>
                      </div>
                    </div>
                    
                    {/* Canvas */}
                    <div className="flex-1 bg-figma-gray-200 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <div className="text-figma-gray-400 text-lg">Your design canvas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-figma-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-figma-blue/10 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-figma-gray-900">Powerful features for modern design</h2>
            <p className="text-figma-gray-600 text-lg">Everything you need to create amazing products, all in one place.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Intuitive Design Tools" 
              description="Create beautiful designs with powerful tools that are easy to use and understand."
              icon={<Layers className="h-8 w-8" />}
              delay={200}
            />
            <FeatureCard 
              title="Smart Components" 
              description="Build consistent designs with reusable components that adapt to your needs."
              icon={<Puzzle className="h-8 w-8" />}
              delay={400}
            />
            <FeatureCard 
              title="Real-time Collaboration" 
              description="Work together with your team in real-time, no matter where you are."
              icon={<Users className="h-8 w-8" />}
              delay={600}
            />
            <FeatureCard 
              title="Lightning Fast" 
              description="Experience blazing-fast performance, even with complex designs."
              icon={<Zap className="h-8 w-8" />}
              delay={800}
            />
            <FeatureCard 
              title="Effortless Prototyping" 
              description="Transform static designs into interactive prototypes with just a few clicks."
              icon={<Wind className="h-8 w-8" />}
              delay={1000}
            />
            <FeatureCard 
              title="Cross-Platform" 
              description="Design on any device or platform, with full compatibility everywhere."
              icon={<Globe className="h-8 w-8" />}
              delay={1200}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-16 bg-figma-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your design workflow?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of designers and teams who use our platform to create amazing products.
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-white text-figma-blue hover:bg-white/90">
                Get started for free
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-figma-purple/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-figma-blue/30 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-figma-gray-900">Simple, transparent pricing</h2>
            <p className="text-figma-gray-600 text-lg">No hidden fees, no surprises. Choose the plan that works for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Starter" 
              price="Free"
              features={[
                "2 team members",
                "Basic design tools",
                "5GB cloud storage",
                "Limited components",
                "Community support"
              ]}
              delay={200}
            />
            <PricingCard 
              title="Professional" 
              price="$15"
              features={[
                "Unlimited team members",
                "Advanced design tools",
                "50GB cloud storage",
                "Unlimited components",
                "Priority support",
                "Version history"
              ]}
              popular={true}
              delay={400}
            />
            <PricingCard 
              title="Enterprise" 
              price="Custom"
              features={[
                "Custom team size",
                "Enterprise-grade tools",
                "Unlimited storage",
                "Advanced security",
                "Dedicated support",
                "Custom integrations"
              ]}
              delay={600}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
