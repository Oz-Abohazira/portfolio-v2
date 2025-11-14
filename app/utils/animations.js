export const imageVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, type: "spring", stiffness: 50 },
  },
};

export const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

export const scaleIn = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, type: "spring", stiffness: 100 },
  },
};

export const shrinkIn = {
  hidden: { scale: 2.5 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, type: "spring", stiffness: 100 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

export const slideLeft = {
  hidden: { x: 30, opacity: 0 },
  visible: (delay = 0.3) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

export const fancyPathButton = {
  hidden: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: [-500, -250, -10, 0],
    y: [-400, 100, -250, 0],
    opacity: [0, 0.35, 0.7, 1],
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
