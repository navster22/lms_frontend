import { useRoutes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const routes = [
    {
        path: "/",
        element: <Signup />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
]

export default routes