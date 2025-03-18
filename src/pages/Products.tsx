
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Layers, 
  Puzzle, 
  Pencil, 
  Palette, 
  Code,
  PenTool
} from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-figma-gray-900">
              Figma Products
            </h1>
            <p className="text-xl text-figma-gray-600">
              Design, prototype, and collaborate all in one platform
            </p>
          </div>
          
          <Tabs defaultValue="figma" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto mb-12">
              <TabsTrigger value="figma" className="py-3 text-base">Figma</TabsTrigger>
              <TabsTrigger value="figjam" className="py-3 text-base">FigJam</TabsTrigger>
              <TabsTrigger value="dev" className="py-3 text-base">Dev Mode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="figma" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-figma-gray-900">Design with Figma</h2>
                  <p className="text-figma-gray-600 mb-6">
                    Create beautiful interfaces, design systems, and prototypes all in one tool.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-purple/10 p-2 rounded-lg">
                        <Layers className="h-5 w-5 text-figma-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Powerful Design Tools</h3>
                        <p className="text-figma-gray-600 text-sm">Create complex designs with intuitive vector editing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-blue/10 p-2 rounded-lg">
                        <Puzzle className="h-5 w-5 text-figma-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Component Libraries</h3>
                        <p className="text-figma-gray-600 text-sm">Build design systems with reusable components</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-green/10 p-2 rounded-lg">
                        <Pencil className="h-5 w-5 text-figma-green" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Interactive Prototyping</h3>
                        <p className="text-figma-gray-600 text-sm">Create immersive, interactive prototypes</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 bg-figma-blue hover:bg-figma-blue/90 text-white">
                    Try Figma for free
                  </Button>
                </div>
                <div className="bg-figma-gray-100 rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center p-6">
                  <div className="bg-white w-full h-full rounded-lg shadow-sm flex items-center justify-center">
                    <p className="text-figma-gray-500">Figma Interface Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="figjam" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-figma-gray-900">Collaborate with FigJam</h2>
                  <p className="text-figma-gray-600 mb-6">
                    The online whiteboard for teams to explore ideas together.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-orange/10 p-2 rounded-lg">
                        <Palette className="h-5 w-5 text-figma-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Sticky Notes & Diagrams</h3>
                        <p className="text-figma-gray-600 text-sm">Capture and organize ideas visually</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-red/10 p-2 rounded-lg">
                        <PenTool className="h-5 w-5 text-figma-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Drawing Tools</h3>
                        <p className="text-figma-gray-600 text-sm">Sketch concepts and visualize workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-purple/10 p-2 rounded-lg">
                        <Layers className="h-5 w-5 text-figma-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Templates</h3>
                        <p className="text-figma-gray-600 text-sm">Start faster with pre-built frameworks</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 bg-figma-orange hover:bg-figma-orange/90 text-white">
                    Try FigJam for free
                  </Button>
                </div>
                <div className="bg-figma-orange/10 rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center p-6">
                  <div className="bg-white w-full h-full rounded-lg shadow-sm flex items-center justify-center">
                    <p className="text-figma-gray-500">FigJam Interface Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dev" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-figma-gray-900">Dev Mode</h2>
                  <p className="text-figma-gray-600 mb-6">
                    Bridge the gap between design and development.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-green/10 p-2 rounded-lg">
                        <Code className="h-5 w-5 text-figma-green" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Code Generation</h3>
                        <p className="text-figma-gray-600 text-sm">Get code snippets from your designs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-blue/10 p-2 rounded-lg">
                        <Puzzle className="h-5 w-5 text-figma-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Design Tokens</h3>
                        <p className="text-figma-gray-600 text-sm">Extract styles and values for implementation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-figma-purple/10 p-2 rounded-lg">
                        <Layers className="h-5 w-5 text-figma-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-figma-gray-900">Inspect Mode</h3>
                        <p className="text-figma-gray-600 text-sm">View detailed specifications of any element</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 bg-figma-green hover:bg-figma-green/90 text-white">
                    Explore Dev Mode
                  </Button>
                </div>
                <div className="bg-figma-green/10 rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center p-6">
                  <div className="bg-white w-full h-full rounded-lg shadow-sm flex items-center justify-center">
                    <p className="text-figma-gray-500">Dev Mode Interface Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
