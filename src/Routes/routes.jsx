import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Add from "../Pages/ForMe";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import QueryDetails from "../Pages/QueryDetails";
import UpdateQueries from "../Pages/UpdateQueries";
import MyQueries from "../Pages/MyQueries";
import Queries from "../Pages/Queries";
import RecentQueries from "../Components/RecentQueries";
import Details from "../Pages/Details";
import AddQueries from "../Pages/AddQueries";
import MyRecommend from "../Pages/MyRecommend";

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
            element: <RecentQueries/>,
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
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/forMe",
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
        loader:({params}) => fetch(`http://localhost:5000/single-queries/${params.id}`)
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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendations",
        element: (
          <PrivateRoute>
            <MyRecommend />
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddQueries />
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
