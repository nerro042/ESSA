import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { pictures } from "../../routes";

const Testcard = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [direction, setDirection] = useState(0); // Tracks swipe direction

  // Open modal with selected image
  const openModal = (index) => setCurrentIndex(index);

  // Close modal
  const closeModal = () => setCurrentIndex(null);

  // Navigate to the next image
  const nextImage = () => {
    setDirection(1); // Forward direction
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setDirection(-1); // Backward direction
    setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  // Handlers for swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackTouch: true,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen p-10">
      <div className="space-y-10">
        {/* Content 1 */}
        <div data-aos="fade-up" className="text-white overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pictures.map((picture, index) => (
              <img
                key={picture.id}
                src={picture.src}
                alt={`Image ${picture.id}`}
                onClick={() => openModal(index)}
                className="w-full h-auto rounded-lg shadow-lg 
                cursor-pointer hover:opacity-75 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence custom={direction}>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...swipeHandlers}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Previous Button (Desktop only) */}
            <button
              className="hidden lg:block absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={prevImage}
            >
              ❮
            </button>

            {/* Next Button (Desktop only) */}
            <button
              className="hidden lg:block absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={nextImage}
            >
              ❯
            </button>

            {/* Image Display with Framer Motion */}
            <motion.img
              key={currentIndex}
              src={pictures[currentIndex].src}
              alt={`Image ${pictures[currentIndex].id}`}
              className="max-w-full max-h-full rounded-lg"
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testcard;
