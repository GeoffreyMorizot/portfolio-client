/**
 * @fileoverview Animation reveal
 * @param element Type of element to animate
 * @param color Color of the text
 * @returns Object with the animation steps
 */
const animationSlideSteps = (
  element: 'text' | 'image',
  color?: string
): Record<string, gsap.TweenVars> => {
  const durationIn = 0.6
  const durationOut = 0.45
  if (element === 'image')
    return {
      step1: {
        transform: 'translate3d(0, 0, 0)',
        duration: durationIn,
        ease: 'Power2.easeOut',
      },
      step2: {
        duration: durationOut,
        '--translate-x': '100%',
        ease: 'Power2.easeIn',
      },
    }
  return {
    step1: {
      '--scale-x': 1,
      duration: durationIn,
      ease: 'Power2.easeOut',
    },
    step2: {
      duration: 0,
      color: color || 'var(--orange)',
      '--origin': 'right',
    },
    step3: {
      '--scale-x': 0,
      duration: durationOut,
      ease: 'Power2.easeIn',
    },
  }
}

/**
 *
 * @param tl Timeline GSAP
 * @param element Element to animate
 * @param position  Position in the timeline "-=0.5"
 */
export function slideAppearAnimationText(
  tl: gsap.core.Timeline,
  element: HTMLElement,
  position?: gsap.Position
) {
  tl.to(element, animationSlideSteps('text').step1, position || undefined)
    .to(element, animationSlideSteps('text').step2)
    .to(element, animationSlideSteps('text').step3)
}

/**
 *
 * @param tl Timeline GSAP
 * @param element Element to animate
 * @param position  Position in the timeline "-=0.5"
 */
export function slideAppearAnimationImage(
  tl: gsap.core.Timeline,
  element: HTMLElement,
  position?: gsap.Position
) {
  tl.to(element, animationSlideSteps('image').step1, position || undefined).to(
    element,
    animationSlideSteps('image').step2
  )
}
