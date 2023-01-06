import axios from 'axios'
import {useEffect, useRef, createContext} from 'react'
import PropTypes from 'prop-types'

/**
 * AxiosContext is a context object that is used to store an Axios instance. The Axios instance can be accessed by components that are descendants of an `AxiosInstanceProvider` component.
 *
 * @type {ReactContext}
 */
export const AxiosContext = createContext(null)

AxiosContext.displayName = 'AxiosContext'

/**
 * AxiosInstanceProvider is a component that provides an Axios instance to its descendants. The Axios instance can be configured with a base URL, request interceptors, and response interceptors.
 *
 * The AxiosInstanceProvider component includes a single required prop: `children`. This prop should contain the JSX markup for the components that will consume the Axios instance.
 *
 * The AxiosInstanceProvider component also includes optional props for configuring the Axios instance: `config`, `requestInterceptors`, and `responseInterceptors`. These props allow you to customize the behavior of the Axios instance.
 *
 * @param {Object} config - An object containing the configuration options for the Axios instance
 * @param {Array} requestInterceptors - An array of request interceptor functions to be added to the Axios instance
 * @param {Array} responseInterceptors - An array of response interceptor functions to be added to the Axios instance
 * @param {ReactNode} children - The JSX markup for the components that will consume the Axios instance
 *
 * @return {ReactElement} The JSX markup for the AxiosInstanceProvider component
 */
export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const instanceRef = useRef(axios.create(config))

  useEffect(() => {
    requestInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.request.use(interceptor)
    })
    responseInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.response.use(interceptor)
    })
  }, [])

  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  )
}

AxiosInstanceProvider.propTypes = {
  config: PropTypes.object,
  requestInterceptors: PropTypes.array,
  responseInterceptors: PropTypes.array,
  children: PropTypes.node,
}
