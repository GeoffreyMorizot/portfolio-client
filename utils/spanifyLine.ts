export function spanifyLine(paragraph: HTMLElement) {
  if (!paragraph || !paragraph.textContent) {
    throw new Error('spanifyLine: No paragraph element was provided')
  } // Get the paragraph element by its ID
  const maxWidth = paragraph.offsetWidth // Get the maximum width of the paragraph

  const words = paragraph.textContent.split(' ') // Split the text content of the paragraph into an array of words

  paragraph.innerHTML = '' // Empty the content of the paragraph

  let currentLine = '' // Variable to store the current line of text

  words.forEach((word, index) => {
    const testLine =
      (currentLine === ''
        ? ''
        : currentLine + (currentLine.endsWith(' ') ? '' : ' ')) + word // Test the current line with the next word
    const testWidth = getTextWidth(testLine) // Get the width of the test line

    if (testWidth <= maxWidth) {
      // If the test line fits within the maximum width, add the word to the current line
      if (currentLine !== '') {
        currentLine += currentLine.endsWith(' ') ? '' : ' '
      }
      currentLine += word
    } else {
      // If the test line exceeds the maximum width, create a new span element for the current line
      const span = document.createElement('span')
      span.textContent = currentLine
      paragraph.appendChild(span)
      currentLine = word // Start a new line with the current word
    }

    if (index === words.length - 1) {
      // Add the last line as a span element after the loop
      const lastSpan = document.createElement('span')
      lastSpan.textContent = currentLine
      paragraph.appendChild(lastSpan)
    }
  })
}

// Function to get the width of a text string
function getTextWidth(text: string): number {
  const tempSpan = document.createElement('span')
  tempSpan.style.visibility = 'hidden'
  tempSpan.style.whiteSpace = 'nowrap'
  tempSpan.style.position = 'absolute'
  tempSpan.style.top = '-9999px'
  tempSpan.textContent = text
  document.body.appendChild(tempSpan)
  const width = tempSpan.offsetWidth
  document.body.removeChild(tempSpan)
  return width
}
