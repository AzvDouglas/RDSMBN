import MainLayout from "../components/layout/MainLayout";
import NewsGrid from "../components/news/NewsGrid";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <NewsGrid />
      </div>
    </MainLayout>
  );
}