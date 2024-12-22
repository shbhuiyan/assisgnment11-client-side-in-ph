import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Add from "../Pages/Add";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import QueryDetails from "../Pages/QueryDetails";
import UpdateQueries from "../Pages/UpdateQueries";
import MyQueries from "../Pages/MyQueries";
import Queries from "../Pages/Queries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <Queries/>,
          },
        ],
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://sports-hub-server-side.vercel.app/products"),
      },
      {
        path: "/equipments",
        element: <Queries />,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
