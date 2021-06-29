import React, { useEffect } from "react"

export function useFullscreenEvent(callback) {
  useEffect(() => {
    const onFullscreenChange = event => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      callback(document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])
}
