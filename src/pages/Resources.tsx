
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  VideoIcon, 
  FileText, 
  Users,
  Share2,
  Play
} from "lucide-react";

const ResourceCard = ({ icon, title, description, link, bgColor }) => (
  <Card className="h-full">
    <CardHeader>
      <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" className="w-full" asChild>
        <Link to={link}>View Resource</Link>
      </Button>
    </CardFooter>
  </Card>
);

const BlogPost = ({ title, date, readTime, image }) => (
  <Card className="overflow-hidden h-full">
    <div className={`h-48 ${image} bg-cover bg-center`}></div>
    <CardContent className="pt-6">
      <div className="text-sm text-figma-gray-500 mb-2">{date} · {readTime} min read</div>
      <h3 className="text-lg font-medium text-figma-gray-900 mb-2">{title}</h3>
      <Link to="#" className="text-figma-blue hover:underline text-sm font-medium">
        Read Article
      </Link>
    </CardContent>
  </Card>
);

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-figma-gray-900">
              Resources
            </h1>
            <p className="text-xl text-figma-gray-600">
              Everything you need to make the most of Figma
            </p>
          </div>
          
          <Tabs defaultValue="learn" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-4 h-auto mb-8">
              <TabsTrigger value="learn" className="py-3 text-base">Learn</TabsTrigger>
              <TabsTrigger value="blog" className="py-3 text-base">Blog</TabsTrigger>
              <TabsTrigger value="community" className="py-3 text-base">Community</TabsTrigger>
              <TabsTrigger value="events" className="py-3 text-base">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="learn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResourceCard 
                  icon={<BookOpen className="h-6 w-6 text-figma-purple" />}
                  title="Documentation"
                  description="Comprehensive guides for using Figma and FigJam"
                  link="/resources/docs"
                  bgColor="bg-figma-purple/10"
                />
                <ResourceCard 
                  icon={<VideoIcon className="h-6 w-6 text-figma-blue" />}
                  title="Video Tutorials"
                  description="Step-by-step video lessons for all skill levels"
                  link="/resources/tutorials"
                  bgColor="bg-figma-blue/10"
                />
                <ResourceCard 
                  icon={<FileText className="h-6 w-6 text-figma-green" />}
                  title="Help Center"
                  description="Answers to common questions and troubleshooting"
                  link="/resources/help"
                  bgColor="bg-figma-green/10"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogPost 
                  title="How to create a design system in Figma"
                  date="May 15, 2023" 
                  readTime="8"
                  image="bg-figma-purple/10"
                />
                <BlogPost 
                  title="Collaborative design: best practices for teams"
                  date="Apr 28, 2023" 
                  readTime="6"
                  image="bg-figma-blue/10"
                />
                <BlogPost 
                  title="Using FigJam for remote brainstorming"
                  date="Apr 12, 2023" 
                  readTime="5"
                  image="bg-figma-green/10"
                />
                <BlogPost 
                  title="Introduction to Auto Layout in Figma"
                  date="Mar 24, 2023" 
                  readTime="7"
                  image="bg-figma-orange/10"
                />
                <BlogPost 
                  title="Design tokens: bridging design and development"
                  date="Mar 10, 2023" 
                  readTime="9"
                  image="bg-figma-red/10"
                />
                <BlogPost 
                  title="Creating interactive prototypes for usability testing"
                  date="Feb 22, 2023" 
                  readTime="10"
                  image="bg-figma-purple/10"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-figma-gray-50 rounded-xl p-8">
                  <Users className="h-8 w-8 text-figma-purple mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-figma-gray-900">Figma Community</h3>
                  <p className="text-figma-gray-600 mb-6">
                    Discover thousands of free resources, plugins, and templates shared by designers around the world.
                  </p>
                  <Button>Explore Community Files</Button>
                </div>
                <div className="bg-figma-gray-50 rounded-xl p-8">
                  <Share2 className="h-8 w-8 text-figma-blue mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-figma-gray-900">Plugins & Widgets</h3>
                  <p className="text-figma-gray-600 mb-6">
                    Extend Figma's functionality with tools created by our global developer community.
                  </p>
                  <Button>Browse Plugins</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="space-y-6">
                <div className="bg-figma-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 bg-figma-purple/10 rounded-lg h-40 flex items-center justify-center">
                    <Play className="h-12 w-12 text-figma-purple" />
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-sm font-medium text-figma-purple mb-2">UPCOMING WEBINAR</div>
                    <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Advanced Prototyping Techniques in Figma</h3>
                    <p className="text-figma-gray-600 mb-4">
                      Join our product designers as they share advanced techniques for creating realistic, interactive prototypes.
                    </p>
                    <div className="flex items-center text-sm text-figma-gray-500 mb-4">
                      <span className="mr-4">June 15, 2023</span>
                      <span>11:00 AM - 12:00 PM PT</span>
                    </div>
                    <Button>Register Now</Button>
                  </div>
                </div>
                
                <div className="bg-figma-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 bg-figma-blue/10 rounded-lg h-40 flex items-center justify-center">
                    <Users className="h-12 w-12 text-figma-blue" />
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-sm font-medium text-figma-blue mb-2">CONFERENCE</div>
                    <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Figma Config 2023</h3>
                    <p className="text-figma-gray-600 mb-4">
                      Our annual conference bringing together designers, developers, and product leaders.
                    </p>
                    <div className="flex items-center text-sm text-figma-gray-500 mb-4">
                      <span className="mr-4">September 21-22, 2023</span>
                      <span>San Francisco, CA</span>
                    </div>
                    <Button>Learn More</Button>
                  </div>
                </div>
                
                <div className="bg-figma-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 bg-figma-green/10 rounded-lg h-40 flex items-center justify-center">
                    <Play className="h-12 w-12 text-figma-green" />
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-sm font-medium text-figma-green mb-2">WORKSHOP</div>
                    <h3 className="text-xl font-bold mb-2 text-figma-gray-900">Getting Started with FigJam</h3>
                    <p className="text-figma-gray-600 mb-4">
                      A hands-on introduction to FigJam for team collaboration and brainstorming.
                    </p>
                    <div className="flex items-center text-sm text-figma-gray-500 mb-4">
                      <span className="mr-4">July 8, 2023</span>
                      <span>1:00 PM - 3:00 PM PT</span>
                    </div>
                    <Button>Register Now</Button>
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

export default Resources;
