interface GetAnimationDelayValueProps {
  base?: number
  index?: number
  interval?: number
}

/**
 * Calculate the transition delay value for Animate component.
 *
 * Formula (default): base (0.1) + index (0) * interval (0.05)
 */
export function getAnimateDelayValue({
  base = 0.1,
  index = 0,
  interval = 0.05,
}: GetAnimationDelayValueProps) {
  return base + index * interval
}
