import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Items from './component/Items.jsx'
import Bag from './component/Bag.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Items/>
    },
    {
      path:'/bag',
      element:<Bag/>
    }
  ]
  
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
