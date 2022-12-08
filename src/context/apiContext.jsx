import axios from 'axios'
import {useEffect, useRef, createContext} from 'react'
import PropTypes from 'prop-types'

export const AxiosContext = createContext(null)

AxiosContext.displayName = 'AxiosContext'

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
