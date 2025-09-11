import { useState, useEffect } from "react";
import { ChevronDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ProjectModal";
import profilePhoto from "@/assets/profile-photo.jpg";
import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Web Dashboard",
    image: projectImage1,
    description: "A modern web application with clean UI design",
    detailedDescription: "This comprehensive web dashboard was built using React and TypeScript, featuring real-time data visualization, user management, and responsive design. The project showcases modern development practices including component-based architecture, state management, and API integration. Key features include interactive charts, user authentication, role-based access control, and mobile-responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    pdfUrl: "/sample-project-details.pdf"
  },
  {
    id: 2,
    title: "Mobile App Design",
    image: projectImage2,
    description: "Elegant mobile application with intuitive user experience",
    detailedDescription: "A cross-platform mobile application designed with user experience at its core. The app features smooth animations, intuitive navigation, and modern design principles. Built using React Native, it includes offline functionality, push notifications, and seamless integration with backend services. The project demonstrates expertise in mobile development, UI/UX design, and performance optimization.",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    pdfUrl: "/sample-project-details.pdf"
  },
  {
    id: 3,
    title: "Analytics Platform",
    image: projectImage3,
    description: "Data visualization platform with advanced analytics",
    detailedDescription: "A comprehensive analytics platform that transforms complex data into actionable insights. Features include real-time data processing, interactive visualizations, custom reporting, and automated alerts. The platform handles large datasets efficiently and provides users with intuitive tools for data exploration and analysis. Built with scalability and performance in mind.",
    technologies: ["Python", "D3.js", "PostgreSQL", "Docker"],
    pdfUrl: "/sample-project-details.pdf"
  }
];

export default function CVPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-card-hover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hello, I'm Alex Johnson
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            A passionate full-stack developer creating beautiful, functional, and user-centered digital experiences. 
            I love turning complex problems into simple, elegant solutions.
          </p>
          
          <div className="flex justify-center mb-12 animate-fade-in">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open('https://linkedin.com/in/example', '_blank')}
            >
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {showScrollHint && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to see my work</span>
              <ChevronDown size={24} />
            </div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer animate-fade-in bg-project-gradient-${index + 1}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}