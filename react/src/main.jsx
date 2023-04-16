import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Recipe from './component/recipe/recipe';
import Filter from './component/filter/filter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Recipe /> */}
    <Filter />
  </React.StrictMode>,
)
