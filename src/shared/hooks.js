import { useRef, useEffect } from "react"
export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    if (value) {
      ref.current = value
    }
  })

  return [
    ref.current,
    v => {
      ref.current = v
    },
  ]
}
