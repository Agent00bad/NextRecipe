import React from 'react'
import ReactDOM from 'react-dom/client'
import Recipe from './component/recipe/recipeMain';
import Filter from './component/filter/filter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Recipe/>
    {/* <Filter /> */}
  </React.StrictMode>,
)
