
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PricingTier = ({ 
  title, 
  price, 
  monthlyPrice,
  yearlyPrice,
  description, 
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
  comingSoon = false
}) => {
  const [billingPeriod, setBillingPeriod] = useState("yearly");
  const currentPrice = billingPeriod === "yearly" ? yearlyPrice : monthlyPrice;
  
  return (
    <div className={`bg-white rounded-xl border ${popular ? 'border-figma-blue shadow-lg' : 'border-figma-gray-200'} overflow-hidden`}>
      {popular && (
        <div className="bg-figma-blue py-1.5 text-center text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-figma-gray-900 mb-2">{title}</h3>
        <p className="text-figma-gray-600 mb-4 h-12">{description}</p>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-figma-gray-900">
            {comingSoon ? 'Coming soon' : `$${currentPrice}`}
          </div>
          {!comingSoon && (
            <div className="text-figma-gray-500 text-sm">
              per editor/{billingPeriod === "yearly" ? "year" : "month"}
            </div>
          )}
        </div>
        
        <Button 
          className={`w-full ${buttonVariant === "default" ? "bg-figma-blue hover:bg-figma-blue/90" : ""}`} 
          variant={buttonVariant}
          disabled={comingSoon}
        >
          {comingSoon ? "Coming Soon" : buttonText}
        </Button>
        
        <Separator className="my-6" />
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-3 text-figma-green flex-shrink-0 mt-0.5" />
              <span className="text-figma-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("yearly");
  
  const handleBillingToggle = () => {
    setBillingPeriod(billingPeriod === "yearly" ? "monthly" : "yearly");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-16 bg-gradient-to-b from-figma-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-figma-gray-900">
              Plans for every design workflow
            </h1>
            <p className="text-xl text-figma-gray-600 mb-8">
              Choose the plan that fits your needs. All plans include access to Figma and FigJam.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-figma-gray-900" : "text-figma-gray-500"}`}>
                Monthly
              </span>
              <Switch checked={billingPeriod === "yearly"} onCheckedChange={handleBillingToggle} />
              <div className="flex items-center">
                <span className={`text-sm font-medium ${billingPeriod === "yearly" ? "text-figma-gray-900" : "text-figma-gray-500"}`}>
                  Yearly
                </span>
                <Badge variant="outline" className="ml-2 text-xs bg-figma-green/10 text-figma-green border-figma-green/20">
                  Save 17%
                </Badge>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="products" className="w-full mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto mb-8">
              <TabsTrigger value="products" className="py-3 text-base">Products</TabsTrigger>
              <TabsTrigger value="organization" className="py-3 text-base">Organization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingTier 
                  title="Starter"
                  monthlyPrice="0"
                  yearlyPrice="0"
                  description="Perfect for individuals getting started with Figma"
                  features={[
                    "3 Figma files",
                    "3 FigJam files",
                    "Unlimited personal files",
                    "Unlimited collaborators",
                    "1 team project",
                    "30-day version history"
                  ]}
                  buttonText="Get Started Free"
                  buttonVariant="outline"
                />
                
                <PricingTier 
                  title="Professional"
                  monthlyPrice="12"
                  yearlyPrice="10"
                  description="For professional designers and teams of any size"
                  features={[
                    "Unlimited Figma files",
                    "Unlimited FigJam files",
                    "Unlimited projects",
                    "Unlimited version history",
                    "Custom templates",
                    "Shared components",
                    "Developer handoff tools"
                  ]}
                  buttonText="Start Free Trial"
                  popular={true}
                />
                
                <PricingTier 
                  title="Organization"
                  monthlyPrice="45"
                  yearlyPrice="38"
                  description="Advanced security and controls for larger teams"
                  features={[
                    "Everything in Professional",
                    "Organization-wide design systems",
                    "SSO implementation",
                    "Private plugins",
                    "Centralized billing",
                    "Advanced security",
                    "Dedicated success manager"
                  ]}
                  buttonText="Contact Sales"
                />
                
                <PricingTier 
                  title="Enterprise"
                  monthlyPrice="Custom"
                  yearlyPrice="Custom"
                  description="Custom solutions for large organizations"
                  features={[
                    "Everything in Organization",
                    "Custom contract terms",
                    "Enterprise account management",
                    "Custom onboarding",
                    "Advanced analytics",
                    "Dedicated support",
                    "MSA & custom terms"
                  ]}
                  buttonText="Contact Sales"
                  buttonVariant="outline"
                  comingSoon={false}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="organization">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <PricingTier 
                  title="Organization"
                  monthlyPrice="45"
                  yearlyPrice="38"
                  description="Advanced security and controls for larger teams"
                  features={[
                    "Everything in Professional",
                    "Organization-wide design systems",
                    "SSO implementation",
                    "Private plugins",
                    "Centralized billing",
                    "Advanced security",
                    "Dedicated success manager"
                  ]}
                  buttonText="Contact Sales"
                />
                
                <PricingTier 
                  title="Enterprise"
                  monthlyPrice="Custom"
                  yearlyPrice="Custom"
                  description="Custom solutions for large organizations"
                  features={[
                    "Everything in Organization",
                    "Custom contract terms",
                    "Enterprise account management",
                    "Custom onboarding",
                    "Advanced analytics",
                    "Dedicated support",
                    "MSA & custom terms"
                  ]}
                  buttonText="Contact Sales"
                  popular={true}
                />
                
                <PricingTier 
                  title="Education"
                  monthlyPrice="0"
                  yearlyPrice="0"
                  description="Free for verified educational institutions"
                  features={[
                    "Everything in Organization",
                    "Free for students and educators",
                    "Unlimited files",
                    "Unlimited projects",
                    "Educational resources",
                    "Community support",
                    "Teaching materials"
                  ]}
                  buttonText="Verify Eligibility"
                  buttonVariant="outline"
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-figma-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-figma-gray-900">Need help choosing the right plan?</h2>
                <p className="text-figma-gray-600 mb-6">
                  Our team is ready to answer your questions and find the perfect solution for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-figma-blue hover:bg-figma-blue/90 text-white">
                    Contact Sales
                  </Button>
                  <Button size="lg" variant="outline">
                    Compare All Features
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 bg-figma-blue/10 h-40 rounded-xl flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="flex space-x-1">
                    <span className="h-10 w-10 rounded-tl-lg bg-figma-red"></span>
                    <span className="h-10 w-10 rounded-tr-lg bg-figma-purple"></span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="h-10 w-10 rounded-bl-lg bg-figma-blue"></span>
                    <span className="h-10 w-10 rounded-br-lg bg-figma-green"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
