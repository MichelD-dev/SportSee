import {useEffect, useRef, useState} from 'react'

/**
 * Custom hook that only executes an effect once. The effect is
 * run on the first render and is not run again on subsequent renders.
 * This is useful for cases where you only want to perform an effect
 * once, such as fetching data or setting up subscriptions.
 *
 * @param {Function} effect - The effect to be executed once.
 */
export const useEffectOnce = effect => {
  const destroyFunc = useRef()
  const effectCalled = useRef(false)
  const renderAfterCalled = useRef(false)
  // eslint-disable-next-line no-unused-vars
  const [val, setVal] = useState(0)

  if (effectCalled.current) {
    renderAfterCalled.current = true
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect()
      effectCalled.current = true
    }

    // this forces one render after the effect is run
    setVal(val => val + 1)

    return () => {
      // if the component didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return
      }
      if (destroyFunc.current) {
        destroyFunc.current()
      }
    }
  }, [])
}
