import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: "/products/:name",
                loader: ({ params }) =>fetch(`http://localhost:5000/products/${params.name}`),
                element: <Products></Products>,
              },
         
        ]
    }
])

export default router;