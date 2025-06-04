// components/CameraFeed.tsx
"use client";

import { useEffect, useRef } from "react";
import ZoomVideo from "@zoom/videosdk";

const CameraFeed = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(videoRef);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const localVideoTrack = await ZoomVideo.createLocalVideoTrack();
        if (videoRef.current) {
          await localVideoTrack.start(videoRef.current);
        }
      } catch (error) {
        console.error("Error starting video track:", error);
      }
    };

    initCamera();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div>
      <div className="flex items-center mb-4">
        <p className="text-black text-sm ">You are being recorded </p>
        <div className="h-2 w-2 inline-block ml-2 bg-red-700 rounded-full"></div>
      </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className=" shadow-md md:h-64  aspect-[16/10] rounded-xl"
      />
    </div>
  );
};

export default CameraFeed;
