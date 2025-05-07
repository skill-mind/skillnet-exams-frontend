import { Button } from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileDetection() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        
        <h1 className="text-xl font-bold mb-4">Mobile Device Detected</h1>
        
        <p className="text-gray-600 mb-6">
          This exam cannot be taken on a mobile device. Please use a desktop or 
          laptop computer with a webcam for exam proctoring.
        </p>
        
        <Button className="w-full" onClick={() => window.location.href = "/"}>
          Return to Dashboard
        </Button>
      </motion.div>
    </div>
  );
}