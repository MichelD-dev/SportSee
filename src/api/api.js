import axios from 'axios'
import {useState, useEffect, useRef, useContext} from 'react'
import {AxiosContext} from '../context/apiContext'
import PropTypes from 'prop-types'

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
 * @returns {Object} - An object with the following properties:
 *   - cancel: a function that cancels the pending requests
 *   - response: the response data or null if no response has been received
 *   - error: the error message or data, or an empty string if no error has occurred
 *   - loading: a boolean indicating whether a request is in progress
 *
 * @example
 * const {cancel, response, error, loading} = useFetch(['/users', '/sessions'])
 *
 * @note
 * The cancel function should be called before unmounting the component to
 * prevent memory leaks.
 */
export const useFetch = endpoints => {
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

  // Define a function that fetches the data from the API
  const fetchData = async () => {
    // Set the loading status to true
    setLoading(true)
    try {
      // Fetch data from all endpoints in parallel using Axios and store the results in an array
      await Promise.all(
        endpoints.map(endpoint =>
          instance.get(endpoint, {
            // Pass the AbortController's signal to the Axios request to allow cancelling the fetch
            signal: controllerRef.current.signal,
          }),
        ),
      ).then(data => {
        // Set the response data depending on the current environment mode
        setResponse(
          import.meta.env.MODE === 'development'
            ? {
                //FIXME
                user: data[0].data,
                session: data[1].data,
                average: data[2].data,
                perf: data[3].data,
              }
            : {
                user: data[0].data.data,
                session: data[1].data.data,
                average: data[2].data.data,
                perf: data[3].data.data,
              },
        )
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

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchData()

    // return cancel //FIXME
  }, [])

  return {cancel, response, error, loading}
}

useFetch.propTypes = {
  endpoints: PropTypes.arrayOf(PropTypes.string).isRequired,
}
