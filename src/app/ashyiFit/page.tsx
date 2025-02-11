import React from "react";

export default function page() {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold text-center py-8 text-purple-800 drop-shadow-lg">
          Ashyi Fit
        </div>

        <div className="relative w-full h-[calc(100vh-12rem)] rounded-2xl overflow-hidden shadow-2xl bg-black/5 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <video className="w-full h-full object-contain" controls>
              <source src="/media/ashyi.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
