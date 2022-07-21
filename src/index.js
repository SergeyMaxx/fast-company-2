import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import Users from './app/components/users'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Users/>
  </React.StrictMode>
)

reportWebVitals()
