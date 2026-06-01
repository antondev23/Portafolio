import React from "react"
import { motion } from "framer-motion"

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <motion.div
        className="flex items-center justify-center rounded-full bg-white border border-gray-200 p-2 text-gray-900 shadow-sm dark:bg-white/10 dark:border-white/20 dark:text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default ScrollIndicator