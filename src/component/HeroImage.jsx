export default function HeroImage() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-0">
      <div className="relative w-full max-w-sm sm:max-w-md">
        <img
          src="/portrait.jpg"
          alt="Temitayo Adebayo - Frontend Developer"
          className="w-full rounded-2xl border-2 sm:border-4 border-[#ff004d] shadow-2xl object-cover"
        />
      </div>
    </div>
  );
}
