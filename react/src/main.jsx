import React from 'react'
import ReactDOM from 'react-dom/client'
import Recipe from './component/recipe/recipe';
import Filter from './component/filter/filter'
import Index from './component/index';
import Loading from './component/loading/loading';
import Header from "./component/header/header"
import Footer from "./component/footer/footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
)
