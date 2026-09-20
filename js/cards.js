import { animate, stagger } from "https://cdn.jsdelivr.net/npm/animejs@4/+esm";

export function initCardsAnim() {
  animate(".card", {
  opacity: [0, 1],
  scale: [0.6, 1],
  delay: stagger(120),
  duration: 700,
  ease: "outBack",
});
}