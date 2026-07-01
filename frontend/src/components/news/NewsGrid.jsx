import { useEffect, useState } from "react";
import { getNews } from "../../services/newsService";
import NewsCard from "./NewsCard";

export default function NewsGrid() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await getNews();

      setNews(response.data);
    }

    loadNews();
  }, []);

  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
    ">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}