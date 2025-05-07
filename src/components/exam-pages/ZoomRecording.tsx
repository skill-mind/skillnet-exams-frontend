"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ZoomRecording() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This is a placeholder for where the actual Zoom SDK integration would happen
    // In a real implementation, you would initialize Zoom SDK here

    // For demo purposes, we'll just simulate the webcam stream
    const startWebcam = async () => {
      try {
        // Try to access the user's webcam
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // When we have the stream, set it as the source for our video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setLoading(false);
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setError("Could not access webcam. Please ensure your camera is connected and you have granted permission.");
        setLoading(false);
      }
    };

    // Start the webcam
    startWebcam();

    // Clean up function
    return () => {
      // Stop all video tracks when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        
        tracks.forEach(track => {
          track.stop();
        });
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-100">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <span className="ml-2">Connecting to camera...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-100 p-4">
        <div className="text-center">
          <div className="text-red-500 mb-2">⚠️</div>
          <p className="text-sm text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="h-full bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
