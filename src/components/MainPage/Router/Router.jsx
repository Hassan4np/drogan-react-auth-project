import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Home";
import Signup from "../RegisterPage/Signup";
import Login from "../RegisterPage/Login";
import News from "../Page/News";
import PrivateRout from "../PrivateRout/PrivateRout";

const MyRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainPage></MainPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/news/:id",
                // element:<PrivateRout><News></News></PrivateRout>
                element:<PrivateRout><News></News></PrivateRout>
            }

        ]
        }
])


export default MyRouter