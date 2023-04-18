export function useIntersectionObserver() {
  const options = ref<IntersectionObserverInit>({ threshold: 0.5 })

  function observe(
    cards: Ref<NodeListOf<Element> | undefined>,
    cb: () => gsap.core.Timeline
  ) {
    if (!cards.value) return
    cards.value.forEach((card) => {
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
      observer.observe(card)
    })
  }
  return {
    observe,
    options,
  }
}
