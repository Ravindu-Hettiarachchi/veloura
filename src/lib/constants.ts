/**
 * Shared motion easing constant required across all animations:
 * [0.76, 0, 0.24, 1] — solid, heavy, architectural, never bouncy.
 */
export const EASE = [0.76, 0, 0.24, 1] as const;

export const TRANSITION_DEFAULTS = {
  duration: 1.2,
  ease: EASE,
} as const;
