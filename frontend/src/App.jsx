import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AdminNewsListPage from "./pages/admin/AdminNewsListPage";
import AdminNewsCreatePage from "./pages/admin/AdminNewsCreatePage";
import AdminNewsEditPage from "./pages/admin/AdminNewsEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/news/:id"
          element={<NewsPage />}
        />

        <Route
          path="/admin/news"
          element={<AdminNewsListPage />}
        />

        <Route
          path="/admin/news/create"
          element={<AdminNewsCreatePage />}
        />

        <Route
          path="/admin/news/:id/edit"
          element={<AdminNewsEditPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;