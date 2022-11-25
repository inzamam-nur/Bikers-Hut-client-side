import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categories from "../Pages/Category/Categories";
import Category from "../Pages/Category/Category";
import Displayeerror from "../Pages/Displayerror/Displayeerror";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <Displayeerror></Displayeerror>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:5000/categories')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
         
        ]
    }
])

export default router;