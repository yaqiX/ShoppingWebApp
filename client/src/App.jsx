import {createBrowserRouter} from "react-router-dom"

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Product from "./pages/Product";

import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/> 
    </div>
    )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/categories/:id",
        element:<Categories/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  }
])


export default App;
