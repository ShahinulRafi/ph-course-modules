import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails";
import App from "../App";
import Profile from "../pages/Profile";
import AllToys from "../pages/AllToys";
import Error from "../pages/Error";
import ForgotPassword from "../pages/ForgotPassword";
import MyToys from "../pages/MyToys";
import AddCar from "../pages/AddCar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/toydetails/:toyId",
        loader: async ({ params }) => {
          const res = await fetch("/allToys.json");
          const toys = await res.json();

          const toy = toys.find((t) => t.toyId === parseInt(params.toyId));
          return toy;
        },
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcar",
        element: <AddCar></AddCar>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
