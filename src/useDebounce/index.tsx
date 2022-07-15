import { useEffect, useState } from 'react'

const useDebounce = (
  callback: (...args: any[]) => any | void | Promise<any>,
  delay: number,
  debug = false
) => {
  let [timer, setTimer] = useState<NodeJS.Timeout | number | null>(null)

  useEffect(
    () => () => {
      timer && clearTimeout(timer)
    },
    []
  )

  const debounce = async (...args: any[]) => {
    timer && clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        callback(...args)
        debug && console.info({ args, callback, delay, timer })
      }, delay)
    )
  }

  return debounce
}

export default useDebounce
