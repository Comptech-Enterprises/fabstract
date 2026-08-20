export const EASE = [0.16, 1, 0.3, 1] as const;

export const wipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: { clipPath: "inset(0 0% 0 0)" },
};

export const slideX = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0 },
};
