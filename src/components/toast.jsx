import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Aviso flotante. Se lanza desde cualquier sitio con showToast("texto"). */
export const showToast = (message) => {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app-toast", { detail: message }));
};

const Toast = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timer;
    const onToast = (event) => {
      setMessage(event.detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener("app-toast", onToast);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("app-toast", onToast);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center px-4 sm:bottom-8" role="status" aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="rounded-md bg-[var(--accent)] px-4 py-3 text-[15px] font-medium text-white shadow-[0_0_24px_rgba(29,155,240,.35)]"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
