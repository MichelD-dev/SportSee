import React from 'react'
import * as S from './components/index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App'
import Error404 from './pages/Error404'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<S.Content />} />
      <Route path="user/:id" element={<S.Content />} />
      <Route path="settings" element={<S.Content />} />
      <Route path="community" element={<S.Content />} />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
