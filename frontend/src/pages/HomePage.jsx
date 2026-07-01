import { useEffect, useState } from "react";
import { getNews } from "../services/newsService";

import NewsGrid from "../components/news/NewsGrid";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await getNews();

      setNews(response.data);
    }

    loadNews();
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className="
            text-center
            text-4xl
            font-bold
            text-[#003B5C]
            mb-10
          "
        >
          Nossas Notícias
        </h1>

        <NewsGrid news={news} />
      </div>
    </section>
  );
}