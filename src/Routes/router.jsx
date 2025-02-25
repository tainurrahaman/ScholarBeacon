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
import ModeratorRoute from "./ModeratorRoute";
import ModeratorDashBoard from "../component/DashBoard/ModeratorDashBoard";
import UserDashBoard from "../component/DashBoard/UserDashBoard";
import UserApplication from "../Layouts/UserLayout/UserApplication";
import UserReviews from "../Layouts/UserLayout/UserReviews";
import ManageScholarship from "../Layouts/ModeratorLayout/ManageScholarship";
import AllReviews from "../component/Pages/Allreview";
import AllappliedScholarship from "../Layouts/ModeratorLayout/AllappliedScholarship";
import AddScholarship from "../Layouts/ModeratorLayout/AddScholarship";
import Profile from "../Shared/Profile";
import ManageUser from "../Layouts/AdminLayout/ManageUser";
import UpdateProfile from "../component/Pages/UpdateProfile";

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
    path: "/updateProfile",
    element: <UpdateProfile></UpdateProfile>,
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
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },

      {
        path: "addScholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "manageScholarship",
        element: <ManageScholarship></ManageScholarship>,
      },
      {
        path: "allAppliedScholarship",
        element: <AllappliedScholarship></AllappliedScholarship>,
      },
      {
        path: "manageUsers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "allreviews",
        element: <AllReviews></AllReviews>,
      },
    ],
  },
  {
    path: "/moderator",
    element: (
      <ModeratorRoute>
        <ModeratorDashBoard></ModeratorDashBoard>
      </ModeratorRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "manageScholarship",
        element: <ManageScholarship></ManageScholarship>,
      },
      {
        path: "allreviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "allAppliedScholarship",
        element: <AllappliedScholarship></AllappliedScholarship>,
      },
      {
        path: "addScholarship",
        element: <AddScholarship></AddScholarship>,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <UserDashBoard></UserDashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "applications",
        element: <UserApplication></UserApplication>,
      },
      {
        path: "reviews",
        element: <UserReviews></UserReviews>,
      },
    ],
  },
]);

export default router;
