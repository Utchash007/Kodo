import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import { Home } from "@/pages/Home"
import { Profile } from "@/pages/Profile"
import { MyTasks } from "@/pages/MyTasks"
import { Login } from "@/pages/Login"


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {

        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "tasks",
                element: <MyTasks />,
            },
        ],
    },
])
