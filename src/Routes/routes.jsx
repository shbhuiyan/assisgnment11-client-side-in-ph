import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import QueryDetails from "../Pages/QueryDetails";
import UpdateQueries from "../Pages/UpdateQueries";
import MyQueries from "../Pages/MyQueries";
import Queries from "../Pages/Queries";
import RecentQueries from "../Components/RecentQueries";
import AddQueries from "../Pages/AddQueries";
import MyRecommend from "../Pages/MyRecommend";
import RecommendationForMe from "../Pages/RecommendationForMe";

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
            element: <RecentQueries />,
          },
        ],
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/recommendsForMe",
        element: <RecommendationForMe />,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateQueries />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a11-server-side-shbhuiyan-main.vercel.app/single-queries/${params.id}`
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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a11-server-side-shbhuiyan-main.vercel.app/single-queries/${params.id}`
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
