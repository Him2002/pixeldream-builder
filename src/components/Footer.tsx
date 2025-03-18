
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-figma-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="flex space-x-1">
              <span className="h-4 w-4 rounded-tl-md bg-figma-red"></span>
              <span className="h-4 w-4 rounded-tr-md bg-figma-purple"></span>
            </div>
            <div className="flex space-x-1">
              <span className="h-4 w-4 rounded-bl-md bg-figma-blue"></span>
              <span className="h-4 w-4 rounded-br-md bg-figma-green"></span>
            </div>
            <span className="ml-2 text-lg font-medium">Figma Clone</span>
          </Link>
          <p className="text-figma-gray-400 mb-6">
            Design, prototype, and collaborate all in one place
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-lg">Product</h4>
          <div className="space-y-3">
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Features</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Enterprise</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Download</Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-lg">Resources</h4>
          <div className="space-y-3">
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Blog</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Community</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Support</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Developers</Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-lg">Company</h4>
          <div className="space-y-3">
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Careers</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Legal</Link>
            <Link to="/" className="block text-figma-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-figma-gray-800 text-figma-gray-400 flex justify-between flex-wrap">
        <p>© 2024 Figma Clone. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link to="/" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
