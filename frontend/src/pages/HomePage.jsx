import { useEffect, useState } from "react";
import { getNews } from "../services/newsService";

import NewsGrid from "../components/news/NewsGrid";
import Pagination from "../components/news/Pagination";
import MainLayout from "../components/layout/MainLayout";
import SearchBar from "../components/news/SearchBar";

export default function HomePage() {
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadNews() {
      const response = await getNews(currentPage);

      setNews(response.data);
      setMeta(response.meta);
    }

    loadNews();
  }, [currentPage]);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <section className="mb-12 text-center">
        <h1
          className="
            text-[#005B46]
            text-4xl
            md:text-5xl
            font-semibold
            mb-8
          "
        >
          Nossas notícias
        </h1>
       
      </section>

      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {filteredNews.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhuma notícia encontrada.
        </p>
      ) : (
        <NewsGrid news={filteredNews} />
      )}

      <NewsGrid news={filteredNews} />      

      {meta && (
        <Pagination
          currentPage={meta.current_page}
          lastPage={meta.last_page}
          onPageChange={setCurrentPage}
        />
      )}
    </MainLayout>
  );
}