import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../../services/newsService";

export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    try {
      const response = await getNews();

      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}