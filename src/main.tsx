import React from 'react'
import ReactDOM from 'react-dom/client'
// global.css must load before component styles so component
// media-query overrides win the cascade
import './styles/global.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
