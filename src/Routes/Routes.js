import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Allbuyer from "../Pages/Dashboard/Admin/AllBuyers.js/AllBuyers";
import AllSeller from "../Pages/Dashboard/Admin/Allseller/Allseller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProducts from "../Pages/Dashboard/Seller/Addproduct";
import Myproduct from "../Pages/Dashboard/Seller/Myproduct";
import MyOrders from "../Pages/Dashboard/User/Myorders/Myorders";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../Routes/PrivateRoute";


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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
          
            {
                path: '/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myproducts',
                element: <Myproduct></Myproduct>
            },
            {
                path: '/allbuyers',
                element: <Allbuyer></Allbuyer>
            },
            {
                path: '/allsellers',
                element:<AllSeller></AllSeller>
            },
            {
                path: '/myorders',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/allsellers',
                element:<AllSeller></AllSeller>
            },
            {
                path: "/products/:name",
                loader: ({ params }) =>fetch(`https://assignment-12-server-sdie.vercel.app/products/${params.name}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>,
              },
         
        ]
    }
])

export default router;