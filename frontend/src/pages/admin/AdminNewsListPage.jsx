import { useEffect, useState } from "react";

import AdminLayout from "../../components/layout/AdminLayout";
import NewsTable from "../../components/admin/NewsTable";

import { getNews } from "../../services/newsService";
import { Link } from "react-router-dom";

export default function AdminNewsListPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await getNews();

      setNews(response.data);
    }

    loadNews();
  }, []);

  return (
    <AdminLayout>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          Postagens
        </h1>

        <Link
          to="/admin/news/create"
          className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          Nova notícia
        </Link>
      </div>

      <NewsTable news={news} />

    </AdminLayout>
  );
}