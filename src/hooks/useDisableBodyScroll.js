import { useEffect } from "react"

export function useDisableBodyScroll(open) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
    return () => {
      document.body.classList.remove("noscroll")
    }
  }, [open])
}
