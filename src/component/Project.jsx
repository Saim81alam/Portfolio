import { Button } from "./snipit/Button";

export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "Food Webstite ( TestyBite )",
      description:
        "A responsive food ordering web app that lets users explore dishes, view detailed menus, add items to their cart, and enjoy a smooth ordering experience.",
      technologies: [
        "React-Js",
        "React-Router-Dom",
        "JavaScript",
        "TailwindCSS",
        "Firebase",
        "HTML5",
      ],
      liveDemo: "https://food-website-tasty-bite.vercel.app/",
      githubLink: "https://github.com/Saim81alam/Food_website-tastyBite-",
      image: "/testyBite.png",
    },
    {
      id: "2",
      title: "Gyme WebSite (Gold Gyme)",
      description:
        "A modern and responsive gym web app where users can explore fitness products, switch gallery views, manage their cart, and view detailed item information effortlessly.",
      technologies: [
        "React-Js",
        "React-Router-Dom",
        "JavaScript",
        "TailwindCSS",
        "HTML5",
      ],
      liveDemo: "https://gyme-website-goldie-gyme.vercel.app/",
      githubLink: "https://github.com/Saim81alam/Gyme_website-Goldie_gyme-",
      image: "/gymWeb.png",
    },
  ];
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
                  className="w-full h-full object-contain"
                />
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
                    className="flex-1 bg-[#ff004d] hover:bg-[#cc0039] text-white py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className="flex-1 bg-transparent border border-white hover:bg-white hover:text-[#0a0a23] text-white py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    GitHub Link
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
