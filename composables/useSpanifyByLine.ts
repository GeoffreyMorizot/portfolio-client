export function useSpanifyByLine() {
  const textElement = ref<HTMLElement | undefined>()
  const testElement = ref<HTMLElement | undefined>()

  function spanifyByLine() {
    if (!textElement.value || !textElement.value.textContent) {
      throw new Error('No intro text')
    }
    const maxWidth = textElement.value.offsetWidth
    const words = textElement.value.textContent.split(' ')
    let currentLine = ''
    textElement.value.textContent = ''

    words.forEach((word, index) => {
      const testLine =
        (currentLine === ''
          ? ''
          : currentLine + (currentLine.endsWith(' ') ? '' : ' ')) + word
      const testWidth = getTextWidth(testLine)

      if (testWidth <= maxWidth) {
        if (currentLine !== '') {
          currentLine += currentLine.endsWith(' ') ? '' : ' '
        }
        currentLine += word
      } else {
        const span = document.createElement('span')
        span.className = 'intro__line'
        span.textContent = currentLine
        if (!textElement.value) {
          throw new Error('No text')
        }
        textElement.value.appendChild(span)
        currentLine = word
      }
      if (index === words.length - 1 && textElement) {
        if (!textElement.value)
          throw new Error('spanifyByLine(): No text element')
        const lastSpan = document.createElement('span')
        lastSpan.className = 'intro__line'
        lastSpan.textContent = currentLine
        textElement.value.appendChild(lastSpan)
      }
    })
  }

  function getTextWidth(text: string) {
    if (!testElement.value) {
      throw new Error('useSpanifyByLine(): Missing test element')
    }
    testElement.value.style.visibility = 'hidden'
    testElement.value.style.whiteSpace = 'nowrap'
    testElement.value.style.position = 'absolute'
    testElement.value.style.top = '-9999px'
    testElement.value.textContent = text
    const width = testElement.value.offsetWidth
    testElement.value.textContent = ''
    return width
  }

  return { spanifyByLine, textElement, testElement }
}
