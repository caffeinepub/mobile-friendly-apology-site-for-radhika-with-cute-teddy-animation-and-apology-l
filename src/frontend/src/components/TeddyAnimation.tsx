export default function TeddyAnimation() {
  return (
    <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[360px] aspect-square flex items-center justify-center">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/generated/heart-doodle.dim_128x128.png" 
          alt=""
          className="absolute top-2 left-2 w-6 h-6 sm:top-0 sm:left-4 sm:w-8 sm:h-8 animate-float-slow opacity-60"
          aria-hidden="true"
        />
        <img 
          src="/assets/generated/heart-doodle.dim_128x128.png" 
          alt=""
          className="absolute top-6 right-4 w-5 h-5 sm:top-8 sm:right-8 sm:w-6 sm:h-6 animate-float-medium opacity-50"
          aria-hidden="true"
        />
        <img 
          src="/assets/generated/heart-doodle.dim_128x128.png" 
          alt=""
          className="absolute bottom-8 left-8 w-6 h-6 sm:bottom-12 sm:left-12 sm:w-7 sm:h-7 animate-float-fast opacity-70"
          aria-hidden="true"
        />
      </div>
      
      {/* Main teddy image with animation */}
      <div className="relative animate-teddy-hug">
        <img 
          src="/assets/generated/teddy-hug-transparent.dim_512x512.png" 
          alt="Cute teddy bear hugging a heart"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
