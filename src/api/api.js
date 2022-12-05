import {useState, useEffect, useRef} from 'react'
import api from './fetchDatas'

export const useFetch = () => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const controllerRef = useRef(new AbortController())
  const cancel = () => {
    controllerRef.current.abort()
  }

  const fetchData = async () => {
    const endpoints = ['/user', '/session', '/average', '/perf']

    setLoading(true)
    try {
      await Promise.all(
        endpoints.map(endpoint =>
          api.get(endpoint, {
            signal: controllerRef.current.signal,
          }),
        ),
      ).then(
        ([{data: user}, {data: session}, {data: average}, {data: perf}]) => {
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

  return {cancel, response, error, loading}
}
