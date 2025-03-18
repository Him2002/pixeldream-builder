
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Dummy project data
const DUMMY_PROJECTS = [
  {
    id: "project-1",
    name: "Website Redesign",
    lastModified: "Yesterday at 2:30 PM",
    thumbnail: "bg-gradient-to-br from-blue-400 to-purple-500"
  },
  {
    id: "project-2",
    name: "Mobile App UI",
    lastModified: "Sep 15, 2023 at 10:12 AM",
    thumbnail: "bg-gradient-to-br from-green-400 to-cyan-500"
  },
  {
    id: "project-3",
    name: "Brand Guidelines",
    lastModified: "Aug 28, 2023 at 4:45 PM",
    thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    id: "project-4",
    name: "Product Illustrations",
    lastModified: "Jul 12, 2023 at 9:30 AM",
    thumbnail: "bg-gradient-to-br from-pink-400 to-red-500"
  },
  {
    id: "project-5",
    name: "Dashboard UI",
    lastModified: "3 hours ago",
    thumbnail: "bg-gradient-to-br from-indigo-400 to-purple-600"
  },
  {
    id: "project-6",
    name: "Onboarding Flow",
    lastModified: "Just now",
    thumbnail: "bg-gradient-to-br from-teal-400 to-emerald-500"
  }
];

const Projects = () => {
  const navigate = useNavigate();
  
  const handleCreateNew = () => {
    toast.success("Creating new project");
    navigate("/workspace");
  };
  
  const handleProjectClick = (id: string) => {
    navigate("/workspace");
  };

  return (
    <div className="min-h-screen bg-figma-gray-50">
      <div className="max-w-6xl mx-auto pt-24 px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-figma-gray-900">Projects</h1>
          <Button onClick={handleCreateNew} className="bg-figma-blue hover:bg-figma-blue/90 text-white">
            Create New
          </Button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-sm font-medium text-figma-gray-600 mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DUMMY_PROJECTS.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className={`h-36 ${project.thumbnail}`}></div>
                <div className="p-4">
                  <h3 className="font-medium text-figma-gray-900">{project.name}</h3>
                  <p className="text-xs text-figma-gray-500">Last modified: {project.lastModified}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-sm font-medium text-figma-gray-600 mb-4">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DUMMY_PROJECTS.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className={`h-24 ${project.thumbnail}`}></div>
                <div className="p-3">
                  <h3 className="font-medium text-figma-gray-900">{project.name}</h3>
                  <p className="text-xs text-figma-gray-500">Last modified: {project.lastModified}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default Projects;
