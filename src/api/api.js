import axios from 'axios'
import {useState, useEffect, useRef, useMemo, useContext} from 'react'
import {AxiosContext} from '../context/apiContext'

export const useFetch = (...endpoints) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const contextInstance = useContext(AxiosContext)
  const instance = useMemo(() => {
    return contextInstance || axios
  }, [contextInstance])
  const controllerRef = useRef(new AbortController())
  const cancel = () => {
    controllerRef.current.abort()
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      await Promise.all(
        endpoints.map(endpoint =>
          instance.get(endpoint, {
            signal: controllerRef.current.signal,
          }),
        ),
      ).then(
        ([{data: user}, {data: session}, {data: average}, {data: perf}]) => {
          // console.log(user)
          setResponse({user, session, average, perf})
        },
      )
    } catch (err) {
      // response not in the 200 range
      if (err.result) setError(err.result.data)
      // no response/404
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => console.log(response), [response])

  return {cancel, response, error, loading}
}

//TODO useCallback
