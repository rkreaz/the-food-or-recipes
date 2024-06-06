import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/home/Category/Category";
import FoodLayout from "../layout/foodLayout";
import Food from "../pages/food/Food/Food";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Shared/Blog/Blog";
import Contact from "../pages/Shared/Contact/Contact";
import ShowDetails from "../pages/showDetails/ShowDetails";
import DetailsLayout from "../layout/DetailsLayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
     
    ]
  },
  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-food-or-server-rkreaz.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'food',
    element: <FoodLayout></FoodLayout>,
    children: [
      {
        path: '/food/:id',
        element: <PrivateRoute><Food></Food></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-food-or-server-rkreaz.vercel.app/food/${params.id}`)
      },
    ]
  },
  {
    path: 'details',
    element: <DetailsLayout></DetailsLayout>,
    children: [
      {
        path: '/details/:id',
        element: <PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-food-or-server-rkreaz.vercel.app/food/${params.id}`)
      }
    ]
  }
  

])
export default router;