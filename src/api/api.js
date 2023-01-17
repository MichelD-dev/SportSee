import {AxiosContext} from '@/context/apiContext'
import {DataModel} from '@/dataModel/DataModel'
import {useEffectOnce} from '@/utils/useEffectOnce'
import axios from 'axios'
import PropTypes from 'prop-types'
import {useState, useRef, useContext} from 'react'

/**
 * useFetch custom hook.
 *
 * Makes parallel GET requests to the provided endpoints and stores the
 * responses in state. If the environment is in development mode, the
 * responses are stored as-is. Otherwise, they are stored under the "data"
 * key of the response object. If an error occurs, the error message or
 * data is stored in state.
 *
 * @param {string[]} endpoints - An array of strings containing the API endpoints to be fetched.
 *
 * @returns {Promise<{cancel: boolean, response: object, error: string | object, loading:boolean}>}
 * @example
 * const {cancel, response, error, loading} = useFetch(['/users', '/sessions'])
 *
 * @note
 * The cancel function should be called before unmounting the component to
 * prevent memory leaks.
 */
export const useFetch = (endpoints = []) => {
  // Initialize state variables for storing the response data, error message, and loading status
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Retrieve the Axios instance from the context, or use the default Axios instance if none is provided
  const contextInstance = useContext(AxiosContext)
  const instance = contextInstance || axios

  // Create a new AbortController instance and store it in a ref
  const controllerRef = useRef(new AbortController())

  // Define a function that cancels the fetch
  const cancel = () => {
    controllerRef.current.abort()
  }

  const datas = new DataModel()

  // Define a function that fetches the data from the API
  const fetchData = async () => {
    // Set the loading status to true
    setLoading(true)
    try {
      // Fetch data from all endpoints in parallel using Axios and store the results in an array
      const responses = await Promise.all(
        endpoints.map(endpoint =>
          instance.get(endpoint, {
            // Pass the AbortController's signal to the Axios request to allow cancelling the fetch
            signal: controllerRef.current.signal,
          }),
        ),
      )

      // Set the chosen environment: 'development" or "production"
      datas.setEnv(import.meta.env.MODE)
      // Set the data for each endpoint in the DataModel
      datas.setUser(responses[0].data)
      datas.setActivity(responses[1].data)
      datas.setAverage(responses[2].data)
      datas.setPerformance(responses[3].data)

      // Set the response data with the data requested from the dataModel
      setResponse({
        user: datas.getUser(),
        session: datas.getActivity(),
        average: datas.getAverage(),
        performance: datas.getPerformance(),
      })
    } catch (err) {
      // If the error is a result of a non-2xx HTTP status, set the error message to the data in the response
      if (err.result) setError(err.result.data)
      // If the error is due to a missing response or a 404 status, set the error message to the error message
      else setError(err.message)
    } finally {
      // Set the loading status to false
      setLoading(false)
    }
  }

  // Fetch the data once when the component mounts (useEffectOnce is used because React Strict mode provokes two renders, causing erratic cancellations of the API calls)
  useEffectOnce(() => {
    fetchData()

    return cancel
  })

  return {cancel, response, error, loading}
}

useFetch.propTypes = {
  endpoints: PropTypes.arrayOf(PropTypes.string).isRequired,
}
