import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, ServerCrash, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApodError } from "@/services/apodApi";

interface Props {
  error: unknown;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: Props) {
  const apodError = error as ApodError | undefined;
  const isNetwork = apodError?.type === "network";
  const isApi = apodError?.type === "api";

  const Icon = isNetwork ? WifiOff : isApi ? ServerCrash : AlertTriangle;
  const title = isNetwork
    ? "No Connection"
    : isApi
    ? "Server Error"
    : "Something Went Wrong";
  const message = apodError?.message || "An unexpected error occurred. Please try again.";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg bg-card p-10 text-center card-glow space-y-4"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-14 h-14 text-primary mx-auto" />
        </motion.div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">{message}</p>
        <Button onClick={onRetry} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
