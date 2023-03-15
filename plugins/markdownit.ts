// @/plugins/markdownit.ts
import md from "markdown-it";

export default defineNuxtPlugin(() => {
  const renderer = md({
    linkify: true,
    xhtmlOut: false,
    typographer: true,
    breaks: true,
    quotes: '“”‘’',
    html: true,
  });
  return {
    provide: {
      mdRenderer: renderer,
    },
  };
});

