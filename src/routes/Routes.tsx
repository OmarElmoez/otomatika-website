import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { AboutUs, Home, Project } from "@/pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "projects/:projectName",
        element: <Project />
      },
      // Add more routes here as needed
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
