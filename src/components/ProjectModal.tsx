import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  pdfUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-card-hover animate-scale-in">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 rounded-full"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">{project.title}</h2>
          
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Programs Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Project Details</h3>
            <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="default" className="flex items-center gap-2">
              <ExternalLink size={18} />
              <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                View Detailed PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};