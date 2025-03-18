
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-figma-black font-medium text-xl"
        >
          <div className="flex space-x-1">
            <span className="h-5 w-5 rounded-tl-lg bg-figma-red"></span>
            <span className="h-5 w-5 rounded-tr-lg bg-figma-purple"></span>
          </div>
          <div className="flex space-x-1">
            <span className="h-5 w-5 rounded-bl-lg bg-figma-blue"></span>
            <span className="h-5 w-5 rounded-br-lg bg-figma-green"></span>
          </div>
          <span className="ml-2 hidden sm:inline-block">Figma Clone</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-figma-gray-700 hover:text-figma-gray-900 transition-colors">
            Products
          </Link>
          <Link to="/" className="text-figma-gray-700 hover:text-figma-gray-900 transition-colors">
            Enterprise
          </Link>
          <Link to="/" className="text-figma-gray-700 hover:text-figma-gray-900 transition-colors">
            Resources
          </Link>
          <Link to="/" className="text-figma-gray-700 hover:text-figma-gray-900 transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="hover:bg-gray-100">
              Log in
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-figma-blue hover:bg-figma-blue/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
