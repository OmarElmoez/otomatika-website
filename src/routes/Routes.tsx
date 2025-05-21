import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { About, AgentPage, Home, Project } from "@/pages";
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
        path: "about",
        element: <About />
      },
      {
        path: "projects/:projectName",
        element: <Project />
      },
      {
        path: "agent",
        element: <AgentPage />
      },
      // Add more routes here as needed
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
