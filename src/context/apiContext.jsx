import axios from 'axios'
import PropTypes from 'prop-types'
import {useRef, createContext} from 'react'

/**
 * AxiosContext is a context object that is used to store an Axios instance. The Axios instance can be accessed by components that are descendants of an `AxiosInstanceProvider` component.
 *
 * @type {ReactContext}
 */
export const AxiosContext = createContext(null)

AxiosContext.displayName = 'AxiosContext'

/**
 * AxiosInstanceProvider is a component that provides an Axios instance to its descendants. The Axios instance can be configured with a base URL.
 *
 * The AxiosInstanceProvider component includes a single required prop: `children`. This prop should contain the JSX markup for the components that will consume the Axios instance.
 *
 * The AxiosInstanceProvider component also includes a required prop for configuring the Axios instance: `config`. This prop allow you to customize the behavior of the Axios instance.
 *
 * @param {Object} config - An object containing the configuration options for the Axios instance
 * @param {ReactNode} children - The JSX markup for the components that will consume the Axios instance
 *
 * @return {ReactElement} The JSX markup for the AxiosInstanceProvider component
 */
export const AxiosInstanceProvider = ({config = {}, children}) => {
  const instanceRef = useRef(axios.create(config))

  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  )
}

AxiosInstanceProvider.propTypes = {
  config: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}
