import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import { getNewsById } from "../services/newsService";

import newsPlaceholder from "../assets/images/news-placeholder.png";

export default function NewsPage() {
  const { id } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await getNewsById(id);

        setNews(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [id]);

  
  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-10">
          Carregando...
        </div>
      </MainLayout>
    );
  }

  if (!news) {
    return (
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-10">
          Notícia não encontrada.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="max-w-5xl mx-auto px-4 py-10">
        <img
          src={news.cover_image || newsPlaceholder}
          alt={news.title}
          className="
            w-full
            h-[450px]
            object-cover
            rounded-xl
            mb-8
          "
        />

        <h1
          className="
            text-[#005B46]
            text-4xl
            md:text-5xl
            font-semibold
            mb-4
          "
        >
          {news.title}
        </h1>

        <p
          className="
            text-gray-500
            mb-10
          "
        >
          {new Date(news.published_at).toLocaleDateString("pt-BR")}
        </p>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: news.content,
          }}
        />
      </main>
    </MainLayout>
  );
}