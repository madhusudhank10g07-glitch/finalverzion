export const generateWave = (offsetY: number, amplitude: number): string => {
  let d = `M -800 ${300 + offsetY}`;
  for (let i = -800; i < 2400; i += 800) {
    d += ` C ${i + 133} ${300 + offsetY - amplitude}, ${i + 266} ${300 + offsetY - amplitude}, ${i + 400} ${300 + offsetY}`;
    d += ` C ${i + 533} ${300 + offsetY + amplitude}, ${i + 666} ${300 + offsetY + amplitude}, ${i + 800} ${300 + offsetY}`;
  }
  return d;
};

export const waves = [
  { y: 0, amp: 120, duration: 20, pulseDuration: 8, phase: 0 },
  { y: 20, amp: 180, duration: 25, pulseDuration: 12, phase: 150 },
  { y: -20, amp: 90, duration: 15, pulseDuration: 6, phase: 300 },
  { y: 40, amp: 240, duration: 30, pulseDuration: 15, phase: 450 },
  { y: -40, amp: 150, duration: 22, pulseDuration: 10, phase: 600 },
];