export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="lg:min-h-screen h-[30%] bg-[#0a0a23] flex items-start sm:items-center py-15 sm:p-6 px-4 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12">
          <span className="text-white">About </span>
          <span className="text-[#ff004d]">ME</span>
        </h2>

        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          I'm a Frontend Developer passionate about building clean,
          user-friendly, and responsive web applications. Skilled in JavaScript,
          React and Tailwind CSS, with a focus on creating intuitive interfaces
          and seamless user experiences.and always open to collaboration on
          impactful projects.
        </p>
      </div>
    </section>
  );
}
