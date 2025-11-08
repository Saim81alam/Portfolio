import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import SkillsTools from "./SkillsTools";
import Education from "./Education";
import Contact from "./Contact";
import AboutMe from "./Aboutme";
import Projects from "./Project";

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a23]">
      <Navigation />

      <main className="min-h-screen flex items-center pt-20 sm:pt-24 pb-8 sm:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <HeroContent />
            <HeroImage />
          </div>
        </div>
      </main>
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default Home;
