export function useIntersectionObserver() {
  const options = ref<IntersectionObserverInit>({ threshold: 0.5 })

  function observe(
    elements:
      | Ref<NodeListOf<Element> | undefined>
      | Ref<Array<HTMLElement> | undefined>,
    cb: () => gsap.core.Timeline | (() => void)
  ) {
    if (!elements.value) return
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
  return {
    observe,
    options,
  }
}
