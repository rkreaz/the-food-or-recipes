import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
