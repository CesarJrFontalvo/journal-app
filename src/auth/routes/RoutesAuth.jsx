import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPages, RegisterPages } from "../pages";
import { AuthRouters } from "./AuthRouters";


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AuthRouters />,
  //   children: [
  //     {
  //         path: '/login',
  //         element: <LoginPages />,
  //       },
  //       {
  //         path: '/register',
  //         element: <RegisterPages />,
  //       },

  //     {
  //       path: '/',
  //       element: <Navigate to='/login' />,
  //     },
  //     {
  //       path: '/*',
  //       element: <Navigate to='/login' />,
  //     }
  //   ],
  // }
  {
    path: '/login',
    element: <LoginPages />,
  },
  {
    path: '/register',
    element: <RegisterPages />,
  },

  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/*',
    element: <Navigate to='/login' />,
  }
]);

export const RoutesAuth = () => {
  return (
    <RouterProvider router={router} />
  )
}
