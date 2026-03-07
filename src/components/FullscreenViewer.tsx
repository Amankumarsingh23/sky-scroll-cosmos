import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function FullscreenViewer({ src, alt, onClose }: Props) {
  const [zoom, setZoom] = useState(1);

  const toggleZoom = () => setZoom((z) => (z === 1 ? 2 : 1));

  const handleDownload = async () => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${alt.replace(/[^a-zA-Z0-9]/g, "_")}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(src, "_blank");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button
            size="icon"
            variant="secondary"
            onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
          >
            {zoom === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={(e) => { e.stopPropagation(); handleDownload(); }}
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <motion.img
          src={src}
          alt={alt}
          className="max-w-[95vw] max-h-[90vh] object-contain cursor-zoom-in rounded-lg"
          style={{ transform: `scale(${zoom})` }}
          onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
