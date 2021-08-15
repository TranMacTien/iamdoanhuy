export const observeAnimation = (callback, targets) => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.7) {
          callback()
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.7,
    }
  )
  targets.forEach(item => observer.observe(item))
}
