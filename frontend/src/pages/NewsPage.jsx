import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { getNewsById } from "../services/newsService";

export default function NewsPage() {
  const { id } = useParams();

  const [news, setNews] = useState(null);

  useEffect(() => {
    async function loadNews() {
      const response = await getNewsById(id);
      setNews(response.data);
    }

    loadNews();
  }, [id]);

  if (!news) {
    return (
      <MainLayout>
        <p>Carregando...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{news.title}</h1>

      <p>{news.excerpt}</p>

      <article>
        {news.content}
      </article>
    </MainLayout>
  );
}