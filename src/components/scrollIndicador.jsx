import React from "react"
import { motion } from "framer-motion"

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-8">

      {/* Mouse */}
      <motion.div
        className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Rueda */}
        <motion.div
          className="w-1 h-2 bg-white rounded-full"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div> 

    </div>
  )
}

export default ScrollIndicator