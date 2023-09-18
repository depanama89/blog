import { useState } from 'react'
import Header  from"./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import "./styles/style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {

  const Layout=()=>{
      return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>

        </>
    )

  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/posts/:id",
          element:<Single/>
        },
        {
          path:"/write",
          element:<Write/>
        },
      ],
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return(
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>

      </div>

    </div>
  )
}

export default App
