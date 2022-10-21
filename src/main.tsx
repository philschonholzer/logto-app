import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { LogtoProvider, LogtoConfig } from '@logto/react'
import './index.css'
import Root from './routes/root'
import ErrorPage from './components/error-page'
import Contact from './routes/contact'
import Callback from './components/callback'

const config: LogtoConfig = {
  endpoint: 'http://localhost:3001',
  appId: 'NuczWrIt6HXoEpd4Xge5A',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
  { path: '/callback', element: <Callback /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LogtoProvider config={config}>
      <RouterProvider router={router} />
    </LogtoProvider>
  </React.StrictMode>
)
