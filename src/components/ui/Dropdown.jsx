import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  return (
    <div className=" flex justify-center z-50">
      <p className="">
        <FlyOutLink href="#" FlyOutContent={PricingContent}>
          NFT's
        </FlyOutLink>
      </p>
    </div>
  );
};

const FlyOutLink = ({ children, href, FlyOutContent }) => {
  const [open, setOpen] = useState(true);

  const showFlyout = open && FlyOutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
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
            className="absolute left-1/2 top-11 "
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div
              className="absolute left-1/2 top-0 h-4 w-4 
          -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-500"
            />
            <FlyOutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return <div className="w-[160px] h-20 bg-slate-500 shadow-xl p-6"></div>;
};

export default Dropdown;
