export function useIntersectionObserver() {
  const options = ref<IntersectionObserverInit>({ threshold: 0.5 })

  function observe(
    elements:
      | Ref<NodeListOf<Element> | undefined>
      | Ref<Array<HTMLElement> | undefined>
      | Ref<HTMLElement | undefined>,
    cb: () => gsap.core.Timeline | (() => void)
  ) {
    if (!elements.value)
      throw new Error('Element in intersection observer is undefined')
    if (elements.value instanceof HTMLElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isIntersecting')
            cb()
            observer.unobserve(entry.target)
            entry.target.classList.remove('isIntersecting')
          }
        })
      }, options.value)
      // Start observing the element
      observer.observe(elements.value)
    } else {
      elements.value.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('isIntersecting')
              cb()
              observer.unobserve(entry.target)
              entry.target.classList.remove('isIntersecting')
            }
          })
        }, options.value)
        // Start observing the element
        observer.observe(element)
      })
    }
  }
  return {
    observe,
    options,
  }
}
