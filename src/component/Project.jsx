import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import ProjectForm from "./ProjectForm";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "E-commerce Product Page",
      description:
        "A responsive web app for browsing products, switching gallery views, managing a shopping cart, and viewing product information in a user-friendly interface.",
      technologies: ["Typescript", "HTML5", "TailwindCSS"],
      liveDemo: "#",
      githubLink: "#",
      image: "/pro.jpg",
    },
    {
      id: "2",
      title: "E-commerce Product Page",
      description:
        "A responsive web app for browsing products, switching gallery views, managing a shopping cart, and viewing product information in a user-friendly interface.",
      technologies: ["Typescript", "HTML5", "TailwindCSS"],
      liveDemo: "#",
      githubLink: "#",
      image: "/pro.jpg",
    },
    {
      id: "3",
      title: "E-commerce Product Page",
      description:
        "A responsive web app for browsing products, switching gallery views, managing a shopping cart, and viewing product information in a user-friendly interface.",
      technologies: ["Typescript", "HTML5", "TailwindCSS"],
      liveDemo: "#",
      githubLink: "#",
      image: "/pro.jpg",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleSaveProject = (newProject) => {
    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a23] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 sm:mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-[#ff004d] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff004d]/20 group"
            >
              <div className="bg-gray-200 h-48 sm:h-56 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="absolute top-3 right-3 bg-[#0a0a23]/80 text-white hover:text-[#ff004d] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Delete project"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-white text-xs sm:text-sm px-3 py-1 bg-[#0a0a23] border border-[#ff004d] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.liveDemo, "_blank")}
                    className="flex-1 bg-[#ff004d] hover:bg-[#cc0039] text-white py-2 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    Live Demo
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className="flex-1 bg-transparent border border-white hover:bg-white hover:text-[#0a0a23] text-white py-2 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    GitHub Link
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#ff004d] hover:bg-[#cc0039] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add Project
          </Button>
        </div>
      </div>

      <ProjectForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
      />
    </section>
  );
}
