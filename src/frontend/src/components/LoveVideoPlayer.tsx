import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface LoveVideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoveVideoPlayer({ isOpen, onClose }: LoveVideoPlayerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-4xl w-[95vw] p-0 border-2 border-romantic-border bg-romantic-cream rounded-2xl overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-romantic-deep" />
          </button>
          
          <div className="relative w-full aspect-video bg-black">
            <video
              className="w-full h-full"
              controls
              autoPlay
              playsInline
              src="/assets/kiss.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
