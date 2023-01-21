import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPages";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path:"/users/:id",
                element: <UserPage />
            }
        ]
    },
]);

export default router;