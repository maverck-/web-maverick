export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'neutral'
    },
    tooltip: {
      slots: {
        content: 'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[tooltip-fade-in_100ms_ease-out] data-[state=closed]:animate-[tooltip-fade-out_50ms_ease-in] pointer-events-auto'
      }
    }
  }
})
