import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  return (
    <div className="flex justify-center z-50">
      <p className="">
        <FlyOutLink href="#" FlyOutContent={PricingContent}>
          NFT's
        </FlyOutLink>
      </p>
    </div>
  );
};

const FlyOutLink = ({ children, href, FlyOutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyOutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit z-50" // Ensuring this component has a high z-index
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 
        -right-2 h-1 origin-left rounded-full 
        bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute left-1/2 top-11 z-50" // Ensure the dropdown itself has a high z-index
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div
              className="absolute left-1/2 top-0 h-4 w-4 
          -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
            />
            <FlyOutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div
      className="w-[160px] h-20 flex justify-center 
    items-center bg-white rounded shadow-xl z-50" // High z-index here as well
    >
      <div
        className="hover:bg-blue-400 transition duration-300 
        ease-in w-full flex justify-center 
        items-center"
      >
        <a
          href="https://linktr.ee/LVBS_ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center py-[9px] hover:text-white 
          text-black text-[15px] transition duration-300 
           ease-in"
        >
          linktr.ee/LVBS_ng
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
