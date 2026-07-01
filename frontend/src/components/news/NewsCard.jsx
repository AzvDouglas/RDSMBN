import { Link } from "react-router-dom";
import newsPlaceholder from "../../assets/images/news-placeholder.png";

export default function NewsCard({ news }) {
  return (
    <Link
      to={`/news/${news.id}`}
      className="block"
    >
      <article
        className="
          flex
          bg-[#F2EFEA]
          overflow-hidden
          h-[320px]
          transition
          hover:shadow-lg
        "
      >
        <div className="w-2/5">
          <img
            src={news.cover_image || newsPlaceholder}
            alt={news.title}
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>

        <div
          className="
            w-3/5
            p-6
            flex
            flex-col
            justify-center
          "
        >
          <h3
            className="
              text-[#005B46]
              text-3xl
              font-semibold
              leading-tight
              mb-3
            "
          >
            {news.title}
          </h3>

          <p
            className="
              text-[#005B46]
              mb-6
              line-clamp-4
            "
          >
            {news.excerpt}
          </p>

          <div>
            <span
              className="
                inline-block
                bg-[#00A8E8]
                text-white
                px-5
                py-2
                rounded-md
                font-bold
                transition-all
                duration-200
                hover:bg-[#0095cf]
                hover:shadow-md
              "
            >
              LER MATÉRIA
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}