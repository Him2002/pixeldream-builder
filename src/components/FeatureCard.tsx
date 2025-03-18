
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0,
  ...props 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 flex flex-col items-start",
        "opacity-0 animate-fade-in-up",
        className
      )} 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      {...props}
    >
      <div className="mb-4 text-figma-blue">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-figma-gray-900">{title}</h3>
      <p className="text-figma-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
