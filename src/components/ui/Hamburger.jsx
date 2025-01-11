import { useRef, useState, useEffect } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Yamburger } from "hamburger-react";
import { routes } from "@/routes";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility of the hamburger button
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the Yamburger button

  // Close the menu when clicking outside, ignoring clicks on the toggle button
  useClickAway(menuRef, (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  });

  // Track the scroll direction and show/hide the hamburger button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY && window.scrollY < 10) {
        // Scrolling up, but only show the button if near the top of the page
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Disable body scroll when the menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore scroll behavior
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-3 right-0 z-50 text-[25px] transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>
        {/* Attach ref to the toggle button */}
        <div ref={buttonRef}>
          <Yamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              ref={menuRef}
              className="fixed left-0 right-0 top-[3.5rem] p-5 pt-0
                bg-neutral-950 border-b h-screen border-b-white/20 overflow-auto"
            >
              <ul className="grid z-[100] gap-2">
                {routes.map((route, index) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl 
                      bg-gradient-to-tr from-neutral-800 via-neutral-950
                      to-neutral-700"
                  >
                    <a
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-full
                      p-5 rounded-xl bg-neutral-950"
                      href={route.href}
                      target={index === 2 ? "_blank" : "_self"}
                      rel={index === 2 ? "noopener noreferrer" : undefined}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hamburger;
