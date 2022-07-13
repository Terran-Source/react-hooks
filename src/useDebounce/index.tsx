import { useEffect, useState } from 'react'

const useDebounce = (
  callback: (...args: any[]) => any | void | Promise<any>,
  delay: number,
  debug = false
) => {
  let [timer, setTimer] = useState<
    string | number | NodeJS.Timeout | undefined
  >(0)

  useEffect(
    () => () => {
      timer && clearTimeout(timer)
    },
    []
  )

  const debounce = async (...args: any[]) => {
    clearTimeout(timer)
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
