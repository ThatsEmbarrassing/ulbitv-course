import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "../Main";
import { About } from "../About";
import { Layout } from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
