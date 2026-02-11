import { useState } from 'react';
import { apologyLetter } from '../content/apologyLetter';
import { Button } from '@/components/ui/button';
import { Heart, Play } from 'lucide-react';
import LoveVideoPlayer from './LoveVideoPlayer';

export default function ApologyLetterCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative">
      {/* Decorative hearts - positioned to avoid overflow on mobile */}
      <img 
        src="/assets/generated/heart-doodle.dim_128x128.png" 
        alt=""
        className="absolute -top-2 -left-2 w-8 h-8 sm:-top-4 sm:-left-4 sm:w-12 sm:h-12 opacity-40 animate-pulse"
        aria-hidden="true"
      />
      <img 
        src="/assets/generated/heart-doodle.dim_128x128.png" 
        alt=""
        className="absolute -top-2 -right-2 w-8 h-8 sm:-top-4 sm:-right-4 sm:w-12 sm:h-12 opacity-40 animate-pulse"
        aria-hidden="true"
      />
      
      {/* Letter card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 border-2 border-romantic-border">
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-romantic-deep font-serif mb-2">
            I'm Sorry, My Love
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-romantic-peach via-romantic-pink to-romantic-peach mx-auto rounded-full" />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-romantic-text leading-relaxed whitespace-pre-wrap text-base sm:text-lg md:text-xl lg:text-2xl font-semibold break-words">
            {apologyLetter}
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 text-right">
          <p className="text-romantic-medium italic font-serif text-base sm:text-lg">
            Yours lovingly,
          </p>
          <p className="text-romantic-deep font-semibold text-lg sm:text-xl mt-1">
            Forever Yours 💕
          </p>
        </div>

        {/* Footer Section with Video Button */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-romantic-border/30">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-romantic-pink fill-romantic-pink animate-pulse" />
              <p className="text-romantic-deep font-semibold text-base sm:text-lg md:text-xl">
                I'm not angry. Click the button below.
              </p>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-romantic-pink fill-romantic-pink animate-pulse" />
            </div>
            
            <Button
              onClick={() => setIsVideoOpen(true)}
              className="bg-gradient-to-r from-romantic-peach via-romantic-pink to-romantic-peach hover:shadow-xl transition-all duration-300 hover:scale-105 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full border-2 border-white/50"
              size="lg"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 fill-white" />
              Watch My Message
            </Button>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <LoveVideoPlayer isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}
