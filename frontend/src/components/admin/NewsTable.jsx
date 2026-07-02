import { Link } from "react-router-dom";
import { deleteNews } from "../../services/newsService";

export default function NewsTable({ news }) {

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Deseja realmente excluir esta notícia?"
    );

    if (!confirmed) return;

    try {
      await deleteNews(id);

      alert("Notícia excluída com sucesso");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Erro ao excluir notícia");
    }
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">
              Título
            </th>

            <th className="text-left p-4">
              Publicação
            </th>

            <th className="text-left p-4">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-4">
                {item.title}
              </td>

              <td className="p-4">
                {item.published_at
                  ? new Date(item.published_at)
                      .toLocaleDateString("pt-BR")
                  : "-"
                }
              </td>

              <td className="p-4 flex gap-2">

                <Link
                  to={`/admin/news/${item.id}/edit`}
                  className="
                    bg-blue-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Editar
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="
                    bg-red-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Excluir
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}