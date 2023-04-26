interface ElementToObserve {
  el: HTMLElement
  callback: (() => void) | (() => gsap.core.Timeline)
}

export function useIntersectionObserver() {
  const options = ref<IntersectionObserverInit>({ threshold: 0.5 })

  function observe(
    elements:
      | Ref<NodeListOf<Element> | HTMLElement[]>
      | Ref<HTMLElement | undefined>,
    callback: (() => void) | (() => gsap.core.Timeline)
  ) {
    if (!elements.value) {
      throw new Error(
        'useIntersectionObserver: the element(s) to observe is undefined'
      )
    }

    const elementsToObserve: ElementToObserve[] = []

    if (elements.value instanceof NodeList) {
      for (const element of elements.value) {
        if (element instanceof HTMLElement) {
          elementsToObserve.push({
            el: element,
            callback,
          })
        }
      }
    } else if (Array.isArray(elements.value)) {
      for (const element of elements.value) {
        if (element instanceof HTMLElement) {
          elementsToObserve.push({
            el: element,
            callback,
          })
        }
      }
    } else {
      elementsToObserve.push({
        el: elements.value,
        callback,
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isIntersecting')
          elementsToObserve.forEach((elementToObserve) => {
            if (elementToObserve.el === entry.target) {
              elementToObserve.callback()
              observer.unobserve(entry.target)
              entry.target.classList.remove('isIntersecting')
            }
          })
        }
      })
    }, options.value)

    elementsToObserve.forEach((elementToObserve) => {
      observer.observe(elementToObserve.el)
    })
  }

  return {
    observe,
    options,
  }
}
