
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({ 
  title, 
  price, 
  features, 
  popular = false,
  delay = 0
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        "opacity-0 animate-fade-in-up",
        popular 
          ? "border-2 border-figma-blue shadow-lg transform scale-105 z-10" 
          : "border border-figma-gray-200"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-figma-blue py-2 text-white text-sm text-center font-medium">
          Most Popular
        </div>
      )}
      <div className={cn(
        "p-8", 
        popular ? "pt-14" : ""
      )}>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-figma-gray-500">/month</span>}
        </div>
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-figma-green mr-2 shrink-0 mt-0.5" />
              <span className="text-figma-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <Button className={cn(
          "w-full transition-all duration-300",
          popular 
            ? "bg-figma-blue hover:bg-figma-blue/90 text-white" 
            : "bg-white text-figma-gray-900 border border-figma-gray-300 hover:bg-figma-gray-50"
        )}>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
