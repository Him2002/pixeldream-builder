
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Users, 
  Globe, 
  Clock,
  Building,
  CheckCircle
} from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-16 bg-gradient-to-b from-figma-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-figma-gray-900">
              Figma for Enterprise
            </h1>
            <p className="text-xl text-figma-gray-600 mb-8">
              Secure, scalable design for your organization
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-figma-blue hover:bg-figma-blue/90 text-white">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-figma-gray-200">
              <div className="bg-figma-blue/10 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-figma-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Enterprise-grade Security</h3>
              <p className="text-figma-gray-600">
                Single sign-on, domain verification, and advanced permission controls
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-figma-gray-200">
              <div className="bg-figma-purple/10 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-figma-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Org-wide Collaboration</h3>
              <p className="text-figma-gray-600">
                Centralized team management and shared design systems
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-figma-gray-200">
              <div className="bg-figma-green/10 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-figma-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Global Scale</h3>
              <p className="text-figma-gray-600">
                Reliable performance for teams of any size, anywhere in the world
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-figma-gray-900">Trusted by leading enterprises</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-figma-green" />
                  <p className="text-figma-gray-700">99.9% uptime SLA for mission-critical workflows</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-figma-green" />
                  <p className="text-figma-gray-700">Advanced analytics and reporting capabilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-figma-green" />
                  <p className="text-figma-gray-700">Dedicated customer success manager</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-figma-green" />
                  <p className="text-figma-gray-700">Priority support with guaranteed response times</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-figma-green" />
                  <p className="text-figma-gray-700">Custom contract terms and enterprise billing</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
              <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Building className="h-8 w-8 text-figma-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-figma-blue/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-figma-gray-900">Ready to scale your design workflows?</h2>
              <p className="text-figma-gray-600 mb-8">
                Contact our enterprise sales team to learn how Figma can empower your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-figma-blue hover:bg-figma-blue/90 text-white">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Enterprise;
