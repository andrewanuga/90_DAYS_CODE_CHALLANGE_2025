import { motion } from "framer-motion";
import { ComponentType } from "react";

function Transition<P>(OgComponent: ComponentType<P>): ComponentType<P> {
  const strips = 8;
  const WrappedComponent: ComponentType<P> = (props) => {
    return (
      <>
        <OgComponent {...props} />
        <div className="fixed inset-0 z-50 flex pointer-events-none">
        {[...Array(strips)].map((_, i) => (
          <motion.div
            key={`in-${i}`}
            className="h-full bg-[#5c2fa5]"
            style={{ width: `${100/strips}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08  // Staggered delay
            }}
          />
        ))}
      </div>

      {/* Outgoing animation strips */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        {[...Array(strips)].map((_, i) => (
          <motion.div
            key={`out-${i}`}
            className="h-full bg-[#5c2fa5]"
            style={{ width: `${100/strips}%` }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08  // Staggered delay
            }}
          />
        ))}
      </div>
      </>
    );
  };
  return WrappedComponent;
}

export default Transition;