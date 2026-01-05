import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import { Home } from "@/pages/Home"
import { Profile } from "@/pages/Profile"
import { MyTasks } from "@/pages/MyTasks"

export const router = createBrowserRouter([
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
