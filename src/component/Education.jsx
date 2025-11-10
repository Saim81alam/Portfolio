export default function Education() {
  const educationList = [
    {
      id: "1",
      institution: " Raja Mahendra Pratap Singh University, Aligarh",
      course: "Bechulor Of Computer Science (BCA)",
      duration: "2021 - 2024",
      description:
        "Studying Software Engineering with focus on Frontend and Backend Development. Learning modern web technologies and best practices.",
    },
  ];
  return (
    <section
      id="education"
      className="min-h-screen bg-[#0a0a23] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 sm:mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-[#ff004d]"></div>

          {/* Education Entries */}
          <div className="space-y-8 sm:space-y-12">
            {educationList.map((entry, index) => (
              <div
                key={entry.id}
                className="relative pl-12 sm:pl-16 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-4 top-2 w-4 h-4 bg-[#ff004d] rounded-full border-4 border-[#0a0a23]"></div>

                {/* Card */}
                <div className="border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff004d]/20 relative group">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-8">
                    {entry.institution}
                  </h3>
                  <h2 className="text-xl sm:text-xl font-bold text-white mb-2 pr-8">
                    {entry.course}
                  </h2>
                  <p className="text-[#ff004d] text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    {entry.duration}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
