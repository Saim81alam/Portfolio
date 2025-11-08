export default function SkillsTools() {
  const categories = [
    {
      title: "Languages",
      skills: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      title: "Frameworks/Build Tools",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Photoshop",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        {
          name: "Canva",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
      ],
    },
    {
      title: "Technologies",
      skills: [
        {
          name: "GitHub",
          icon: "https://e7.pngegg.com/pngimages/347/509/png-clipart-github-computer-icons-logo-github-angle-white.png",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ];

  const softSkills = [
    "Team Player",
    "Debugging",
    "Time Management",
    "Good Communication",
  ];

  return (
    <section
      id="skills-tools"
      className="min-h-screen bg-[#0a0a23] py-15 sm:p-6 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 sm:mb-16">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {categories.map((category) => (
            <div
              key={category.title}
              className="border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff004d]/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                    <span className="text-white text-xs sm:text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ff004d] rounded-full flex-shrink-0"></span>
                <span className="text-white text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
