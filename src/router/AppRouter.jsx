import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { JournalRouter, JournalRoutes } from "../journal/routes";
import { AuthRouters, RoutesAuth } from "../auth/routes";

const routesConfig = createBrowserRouter([
    {
        path: "/auth/*",
        // ? Login Y registro
        element: (
            //   <PublicRoute>
            <AuthRouters />
            //   </PublicRoute>
        ),
        children: RoutesAuth,
        //   errorElement: <ErrorPage />,
        errorElement: (<div>error</div>),
    },
    {
        // ? Journalist App
        path: "/",
        element: (
            //   <PrivateRoute>
            <JournalRouter />
            //   </PrivateRoute>
        ),
        children: JournalRoutes,
        //   errorElement: <ErrorPage />,
        errorElement: (<div>error</div>),
    },
   
]);

export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};