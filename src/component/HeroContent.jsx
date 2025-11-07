import { Button } from "./ui/button";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium">
          Hello, I'm <span className="text-[#ff004d]">Sameer Alam</span>
        </h2>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          (Theezigner)
        </h1>
        <p className="text-[#ff004d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Frontend Developer
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <Button className="bg-[#ff004d] hover:bg-[#ff3366] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
          Download CV
        </Button>
        <Button className="bg-[#ff004d] hover:bg-[#ff3366] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
          GitHub Link
        </Button>
        <Button className="bg-white hover:bg-[#ff004d] text-[#0a0a23] hover:text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
          Let's Talk
        </Button>
      </div>
    </div>
  );
}
