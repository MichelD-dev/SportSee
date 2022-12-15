import React from 'react'
import * as S from '../components/index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../App'
import Error404 from '../pages/Error404'
import EmptyPage from '../pages/EmptyPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<EmptyPage />} />
      <Route path="user/:id" element={<S.Content />} />
      <Route path="settings" element={<EmptyPage />} />
      <Route path="community" element={<EmptyPage />} />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
