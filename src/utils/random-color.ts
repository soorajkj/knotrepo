export const randomRGBA = (alpha = 1) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.min(Math.max(alpha, 0), 1);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const adjustOpacity = (rgba: string, alpha: number) => {
  return rgba.replace(/[\d.]+\)$/g, `${alpha})`);
};
