import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home/Home";
import Login from "../component/Pages/Login";
import SignUp from "../component/Pages/SignUp";
import AllScholarships from "../component/Pages/AllScholarship";
import ScholarshipDetails from "../component/Pages/ScholarshipDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminDashBoard from "../component/DashBoard/AdminDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/allScholarship",
    element: <AllScholarships></AllScholarships>,
  },
  {
    path: "/scholarship/:id",
    element: (
      <PrivateRoute>
        <ScholarshipDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashBoard />
      </AdminRoute>
    ),
  },
]);

export default router;
