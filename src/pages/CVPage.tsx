import { useState, useEffect } from "react";
import { ChevronDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ProjectModal";
import profilePhoto from "@/assets/profile-photo.jpg";
import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";
import projectImage4 from "@/assets/project-4.jpg";
import projectImage5 from "@/assets/project-5.jpg";
import projectImage6 from "@/assets/project-6.jpg";
import projectImage7 from "@/assets/project-7.jpg";

const projects = [
  {
    id: 1,
    title: "Water and Wastewater",
    image: projectImage4,
    description: "We designed a water and wastewater system for a residential project in Randaberg, based on terrain data and municipal requirements.",
    detailedDescription: "In this project, we worked on developing technical water and wastewater plans for the building project at Vistnesveien 24 and 26 in Randaberg municipality. Using digital maps, zoning data, and VA-data (SOSI). We designed a pipeline network that will be handed over to the municipality. The system is supplied from the Varen reservoir at elevation +70, and we estimated head losses and selected an appropriate friction coefficient. The plan covers three building areas: BBB1 with 16 apartments, BBB2 with 10 apartments, and BK1 with 8 row houses. We based our design on the given terrain and building elevations. ",
    technologies: ["Revit", "AutoCad", "Novapoint"],
    pdfUrl: "/water-wastewater-project.pdf"
  },
  {
    id: 2,
    title: "Building Physics",
    image: projectImage6,
    description: "A low-energy house was designed from concept to energy analysis, gaining experience in both structural design and building physics.",
    detailedDescription: "In this project, we designed a single-family house that meets the requirements of TEK17 and NS3700 for low-energy buildings. The work was divided into three parts: building permit drawings, including site plans, floor plans, elevations, sections, and climate data; structural design, including load calculations and ventilation solutions; and detailed construction drawings and energy calculations, evaluating U-values, thermal bridges, heat loss, internal heat gains, and annual energy demand. We also prepared an energy certificate and proposed energy supply solutions. The project combined building physics and structural engineering, providing us with experience in complete residential design, from sketches to final energy assessment.",
    technologies: ["Revit", "AutoCad", "Excel"],
    pdfUrl: "/building-physics-project.pdf"
  },
  {
    id: 3,
    title: "Area Planning",
    image: projectImage5,
    description: "We created a zoning plan for a 73-decare site in Sandnes with 70% housing, road and pedestrian networks, green spaces, and varied housing types.",
    detailedDescription: "In this assignment, we prepared a detailed zoning plan for Høylandsmyrå in Austrått, Sandnes. The planning area is approximately 73 decares and we regulated it for mixed development and facilities, ensuring that at least 70% is dedicated to housing. We planned a new access road and a collector road through the site, as well as a pedestrian and bicycle network connected to existing and planned infrastructure. We also included green areas and playgrounds, while providing a variety of housing types and sizes. Throughout the work, we followed the %BRA and %BYA requirements set in the municipal master plan.",
    technologies: ["Revit", "AutoCad", "Focus Arealplan"],
    pdfUrl: "/area-planning-project.pdf"
  },
    {
      id: 4,
      title: "Life extension analysis of Offshore structure",
      image: projectImage7,
      description: "We assessed an ageing structural component through analysis, reliability checks, and repair proposals, based on degradation data and engineering methods.",
      detailedDescription: "In this project, we studied an ageing structural component to assess its degradation, uncertainty, and safety. We modeled one uncertain parameter, performed strength calculations, and carried out reliability analyses for the structure in three conditions: as new, degraded, and repaired. Bayesian updating was used based on inspection data, and we proposed a repair method. The results were presented in a 30-page report and a final presentation..",
      technologies: ["Python", "D3.js", "PostgreSQL", "Docker"],
      pdfUrl: "/offshore-structure-project.pdf"
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-white/20 shadow-card-hover"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in px-4">
            Hello, I'm Jasanth
          </h1>
          
          <div className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in space-y-4">
            <p>
              I'm a civil engineering graduate with a Bachelor's degree in Construction Engineering and a strong academic background from the University of Stavanger. I am currently in the process of earning two Master's degrees, one in Structural & Mechanical Engineering and the other in Industrial Economics & Management. My expertise includes structural design, infrastructure planning, and water and wastewater systems, with a growing focus on project management and leadership.
            </p>
            <p>
              With experience across construction, logistics, education, and customer service, I bring a versatile skill set, strong communication abilities, and a passion for delivering sustainable, value-driven solutions. I'm motivated by continuous learning and projects that make a real impact on society and the environment.
            </p>
          </div>
          
          <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in px-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/in/jasanth-santhakumar-448550114/?originalSubdomain=no', '_blank')}
            >
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {showScrollHint && (
          <div className="absolute bottom-8 transform -translate-x-1/2 text-white/70 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to see my work</span>
              <ChevronDown size={24} />
            </div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              A showcase of my recent work I'm passionate about
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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