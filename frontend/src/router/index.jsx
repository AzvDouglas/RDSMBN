import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";

import AdminNewsListPage from "../pages/admin/AdminNewsListPage";
import AdminNewsCreatePage from "../pages/admin/AdminNewsCreatePage";
import AdminNewsEditPage from "../pages/admin/AdminNewsEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news/:id",
    element: <NewsPage />,
  },

  {
    path: "/admin/news",
    element: <AdminNewsListPage />,
  },

  {
    path: "/admin/news/create",
    element: <AdminNewsCreatePage />,
  },

  {
    path: "/admin/news/:id/edit",
    element: <AdminNewsEditPage />,
  },
]);

export default router;