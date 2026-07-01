import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news/:id",
    element: <NewsPage />,
  },
]);

export default router;