"use client";
import { useState, useRef, useEffect } from "react";

export default function page() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        // Handle any autoplay restrictions
        console.log("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-300 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold text-center py-8 text-purple-800 drop-shadow-lg">
          Ashley Fit
        </div>

        <div className="relative w-full h-[calc(100vh-12rem)] rounded-2xl overflow-hidden shadow-2xl bg-black/5 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              onClick={togglePlay}
              autoPlay
              playsInline
              controls
            >
              <source src="/AshleyFit/AshleyFitVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
