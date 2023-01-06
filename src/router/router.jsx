import React from 'react'
import * as S from '../components/index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../App'
import EmptyPage from '../pages/emptyPage/EmptyPage'
import Home from '../pages/home/Home'
import Error404 from '../pages/error404/Error404'

/**
 * router is a variable that represents a browser router for the application.
 *
 * The router is created using the `createBrowserRouter` function from the `react-router-dom` library. The routes for the router are defined using the `createRoutesFromElements` function, which takes a JSX element as an argument.
 *
 * The JSX element consists of a root `Route` element with several nested `Route` elements. Each nested `Route` element defines a different route for the application, with a corresponding path and element to render. The `App` component is used as the root element for all routes, and the other elements are used to render the various pages of the application.
 *
 * @type {Router}
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="user/:id" element={<S.Content />} />
      <Route path="settings" element={<EmptyPage />} />
      <Route path="community" element={<EmptyPage />} />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
