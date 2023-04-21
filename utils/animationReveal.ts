/**
 * @fileoverview Animation reveal
 * @param element Type of element to animate
 * @param color Color of the text
 * @returns Object with the animation steps
 */
const revealSteps = (
  element: 'text' | 'image',
  color?: string
): Record<string, gsap.TweenVars> => {
  const durationIn = 0.7
  const durationOut = 0.55
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
export function revealAnimationText(
  tl: gsap.core.Timeline,
  element: HTMLElement | NodeList,
  position?: gsap.Position,
  color?: string
) {
  if (element instanceof NodeList) {
    const stagger = 0.2
    tl.to(
      element,
      { ...revealSteps('text').step1, stagger },
      position || undefined
    )
      .to(element, revealSteps('text', color).step2)
      .to(element, { ...revealSteps('text').step3, stagger })
  } else {
    tl.to(element, revealSteps('text').step1, position || undefined)
      .to(element, revealSteps('text', color).step2)
      .to(element, revealSteps('text').step3)
  }
}

/**
 *
 * @param tl Timeline GSAP
 * @param element Element to animate
 * @param position  Position in the timeline "-=0.5"
 */
export function revealAnimationImage(
  tl: gsap.core.Timeline,
  element: HTMLElement,
  position?: gsap.Position
) {
  tl.to(element, revealSteps('image').step1, position || undefined).to(
    element,
    revealSteps('image').step2
  )
}
