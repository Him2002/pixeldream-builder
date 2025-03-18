
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import {
  ChevronDown,
  Plus,
  Home,
  Grid2X2,
  Users,
  Settings,
  ChevronRight,
  MoreHorizontal,
  Hand,
  MousePointer,
  Type,
  Square,
  Circle,
  PenTool,
  Image,
  Layers,
  ArrowRight,
  Save,
  Share2,
  User,
  LogOut,
} from "lucide-react";

const Workspace = () => {
  const [selectedTool, setSelectedTool] = useState("pointer");
  const [zoom, setZoom] = useState(100);
  const [showGrid, setShowGrid] = useState(false);
  
  const handleSave = () => {
    toast.success("Project saved successfully");
  };
  
  const handleShareClick = () => {
    toast.success("Share link copied to clipboard");
  };
  
  const tools = [
    { id: "hand", icon: <Hand className="h-5 w-5" />, label: "Hand Tool" },
    { id: "pointer", icon: <MousePointer className="h-5 w-5" />, label: "Select Tool" },
    { id: "text", icon: <Type className="h-5 w-5" />, label: "Text Tool" },
    { id: "rectangle", icon: <Square className="h-5 w-5" />, label: "Rectangle Tool" },
    { id: "ellipse", icon: <Circle className="h-5 w-5" />, label: "Ellipse Tool" },
    { id: "pen", icon: <PenTool className="h-5 w-5" />, label: "Pen Tool" },
    { id: "image", icon: <Image className="h-5 w-5" />, label: "Image Tool" },
  ];

  return (
    <div className="h-screen flex flex-col bg-figma-gray-100 overflow-hidden">
      {/* Top navbar */}
      <header className="h-12 bg-figma-gray-900 text-white flex items-center justify-between px-3 z-10">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-1">
            <div className="flex space-x-0.5">
              <span className="h-3.5 w-3.5 rounded-tl-sm bg-figma-red"></span>
              <span className="h-3.5 w-3.5 rounded-tr-sm bg-figma-purple"></span>
            </div>
            <div className="flex space-x-0.5">
              <span className="h-3.5 w-3.5 rounded-bl-sm bg-figma-blue"></span>
              <span className="h-3.5 w-3.5 rounded-br-sm bg-figma-green"></span>
            </div>
          </Link>
          
          <div className="flex items-center">
            <Button variant="ghost" className="h-8 px-2 text-white/80 hover:text-white hover:bg-white/10">
              File
            </Button>
            <Button variant="ghost" className="h-8 px-2 text-white/80 hover:text-white hover:bg-white/10">
              Edit
            </Button>
            <Button variant="ghost" className="h-8 px-2 text-white/80 hover:text-white hover:bg-white/10">
              View
            </Button>
            <Button variant="ghost" className="h-8 px-2 text-white/80 hover:text-white hover:bg-white/10">
              Object
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={handleSave}
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={handleShareClick}
          >
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          
          <div className="w-px h-6 bg-white/20 mx-1"></div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-figma-purple text-white">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/" className="flex w-full items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      {/* Main workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar - navigation */}
        <div className="w-14 bg-figma-gray-800 flex flex-col items-center py-4 space-y-6 flex-shrink-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Home className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg bg-figma-blue text-white"
                >
                  <Layers className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Current Project</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Grid2X2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">All Projects</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Users className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Team</TooltipContent>
            </Tooltip>
            
            <div className="flex-1"></div>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Left panel - layers/assets */}
        <div className="w-64 bg-white border-r border-figma-gray-200 flex flex-col flex-shrink-0">
          <div className="flex items-center justify-between p-3 border-b border-figma-gray-200">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 px-2 text-figma-gray-700 font-medium"
              >
                Layers
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 text-figma-gray-700"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-2">
              <div className="text-sm font-medium text-figma-gray-900 p-2">Page 1</div>
              
              <div className="space-y-1">
                <div className="flex items-center p-2 rounded-md hover:bg-figma-gray-100 text-sm text-figma-gray-700 cursor-pointer">
                  <ChevronRight className="h-4 w-4 mr-1 text-figma-gray-400" />
                  <span>Frame 1</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-figma-gray-100 text-sm text-figma-gray-700 cursor-pointer pl-6">
                  <span>Rectangle 1</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-figma-gray-100 text-sm text-figma-gray-700 cursor-pointer pl-6">
                  <span>Text layer</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md bg-figma-blue/10 text-figma-blue text-sm cursor-pointer">
                  <ChevronRight className="h-4 w-4 mr-1 text-figma-blue" />
                  <span>Group 1</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-figma-gray-100 text-sm text-figma-gray-700 cursor-pointer pl-6">
                  <span>Circle 1</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        
        {/* Main canvas area */}
        <div className="flex-1 relative overflow-hidden bg-figma-gray-100">
          {/* Canvas toolbar */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 bg-white rounded-lg shadow-md z-10 p-1">
            {tools.map((tool) => (
              <TooltipProvider key={tool.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-9 w-9 rounded-md ${
                        selectedTool === tool.id
                          ? "bg-figma-gray-200 text-figma-gray-900"
                          : "text-figma-gray-700 hover:bg-figma-gray-100"
                      }`}
                      onClick={() => setSelectedTool(tool.id)}
                    >
                      {tool.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{tool.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          
          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white rounded-lg shadow-md p-2 z-10">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-figma-gray-700"
              onClick={() => setZoom((prev) => Math.max(25, prev - 25))}
            >
              -
            </Button>
            <div className="text-sm text-figma-gray-700">{zoom}%</div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-figma-gray-700"
              onClick={() => setZoom((prev) => Math.min(400, prev + 25))}
            >
              +
            </Button>
          </div>
          
          {/* Grid toggle */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white rounded-lg shadow-md p-2 z-10">
            <Button
              variant="ghost"
              size="sm"
              className={`h-7 px-2 ${
                showGrid ? "text-figma-blue" : "text-figma-gray-700"
              }`}
              onClick={() => setShowGrid(!showGrid)}
            >
              {showGrid ? "Hide Grid" : "Show Grid"}
            </Button>
          </div>
          
          {/* The actual canvas */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* This would be your actual design canvas */}
            <div 
              className={`bg-white w-[800px] h-[600px] shadow-lg transform scale-${
                zoom / 100
              } transition-transform duration-150 ease-in-out`} 
              style={{ transform: `scale(${zoom / 100})` }}
            >
              {showGrid && (
                <div className="absolute inset-0 bg-grid-pattern opacity-10" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, #ddd 1px, transparent 1px), 
                                    linear-gradient(to bottom, #ddd 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} 
                />
              )}
              
              {/* Example design elements */}
              <div className="absolute left-20 top-20 w-40 h-40 bg-figma-blue/20 rounded-lg border border-figma-blue/30"></div>
              <div className="absolute left-100 top-40 w-60 h-20 bg-figma-purple/20 rounded-lg border border-figma-purple/30"></div>
              <div className="absolute left-80 top-80 w-32 h-32 rounded-full bg-figma-green/20 border border-figma-green/30"></div>
              <div className="absolute left-40 top-120 w-200 h-10 flex items-center justify-center">
                <div className="text-figma-gray-800 text-xl font-medium">Your Design Here</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right panel - properties */}
        <div className="w-72 bg-white border-l border-figma-gray-200 flex flex-col flex-shrink-0">
          <div className="p-3 border-b border-figma-gray-200 flex items-center justify-between">
            <div className="text-sm font-medium text-figma-gray-900">Design</div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 text-figma-gray-700"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              {/* Position and size controls */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-figma-gray-500 uppercase">Position & Size</div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-xs text-figma-gray-500 mb-1">X</div>
                    <Input value="100" className="h-8 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-figma-gray-500 mb-1">Y</div>
                    <Input value="120" className="h-8 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-figma-gray-500 mb-1">W</div>
                    <Input value="200" className="h-8 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-figma-gray-500 mb-1">H</div>
                    <Input value="40" className="h-8 text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Fill controls */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-figma-gray-500 uppercase">Fill</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-md bg-figma-blue mr-2"></div>
                    <div className="text-sm text-figma-gray-700">#0D99FF</div>
                  </div>
                  <div className="text-xs text-figma-gray-500">100%</div>
                </div>
              </div>
              
              {/* Stroke controls */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-figma-gray-500 uppercase">Stroke</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-md border border-figma-gray-300 mr-2"></div>
                    <div className="text-sm text-figma-gray-700">None</div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-figma-gray-500"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Effects controls */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-figma-gray-500 uppercase">Effects</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-figma-gray-700">Shadow</div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-figma-gray-500"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Workspace;

// Helper component for Input
const Input = ({ 
  className, 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`w-full px-2 rounded-md border border-figma-gray-200 focus:outline-none focus:ring-1 focus:ring-figma-blue focus:border-figma-blue ${className}`}
      {...props}
    />
  );
};
