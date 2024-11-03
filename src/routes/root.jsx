import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home.page";
import Buy from "../pages/buy/buy.page";
import Histo from "../pages/histo/histo.page";
import Dashboard from "../pages/dashboard";
import GuardRoute from "./GuardRoute";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        
    },
    {
        path: "dashboard",
        element : <GuardRoute><Dashboard /></GuardRoute>,
        children: [
            {
                path: 'buy',
                element: <Buy />
            },
            {
                path: 'histo',
                element: <Histo />
            },
        ]
    }


]);

export default router;