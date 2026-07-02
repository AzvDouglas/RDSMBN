import NewsCard from "./NewsCard";

export default function NewsGrid({ news }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-12
      "
    >
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}