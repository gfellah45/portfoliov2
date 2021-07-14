export const navVariant = {
  open: {
    rotate: 90,
    borderRadius: 50,
    transition: {
      type: "spring",
    },
  },
  close: {
    rotate: 0,
    borderRadius: 10,
    transition: {
      type: "spring",
    },
  },
};

export const barVariant1 = {
  open: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  close: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export const barVariant2 = {
  open: {
    rotate: 45,
    translateY: 10,
    transition: {
      delay: 1,
    },
  },
  close: {
    rotate: 0,
    translateY: 0,
    transition: {
      delay: 1,
    },
  },
};

export const barVariant3 = {
  open: {
    rotate: -45,
    translateY: -10,
    transition: {
      delay: 1.1,
    },
  },
  close: {
    rotate: 0,
    translateY: 0,
    transition: {
      delay: 1,
    },
  },
};

export const overLay = {
  open: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  close: {
    x: "-100vw",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const listDesktop = {
  initial: {
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  }),
};

export const listMobile = {
  initial: {
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.35,
      type: "spring",
    },
  }),
};

export const fadeUp = {
  initial: {
    opacity: 0,
    translateY: "30px",
  },
  animate: {
    opacity: 1,
    translateY: "0px",
  },
};

// export const container = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

export const container = {
  hidden: {
    opacity: 0,
    translateY: "30px",
  },
  show: {
    opacity: 1,
    translateY: "0px",
    transition: {
      delay: 1.3,
      staggerChildren: 0.3,
      staggerDirection: -1,
      delayChildren: 0.6,
      type: "spring",
      duration: 1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, translateY: "30px" },
  show: {
    opacity: 1,
    translateY: "0px",
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const width = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "100%",
    transition: {
      type: "spring",
      duration: 2,
      delay: 1.6,
    },
  },
};
