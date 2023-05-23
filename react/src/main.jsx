import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./root"
import Index from "./component/index"
import Filter from "./component/filter/filter"
import Recipe from "./component/recipe/recipeMain"
import About from './component/about/about'
import Contact from './component/contact/contact'
import Loading from "./component/loading/loading"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element : <Root/>,
      children:[
        {
          path: "/",
          element: <Index/>
        },
        {
          path: "/filter",
          element: <Filter/>
        },
        {
          path: "recipe/",
          element: <Recipe/>
        }
        ,
        {
          path: "/about",
          element: <About/>
        }
        ,
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    },
    {
      path: "loading",
      element: <Loading/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
