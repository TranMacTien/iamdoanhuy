export const observeAnimation = (callback, targets) => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.2) {
          callback()
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.2,
    }
  )
  targets.forEach(item => observer.observe(item))
}
