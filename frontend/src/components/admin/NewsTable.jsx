export default function NewsTable({ news }) {
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
                {new Date(
                  item.published_at
                ).toLocaleDateString("pt-BR")}
              </td>

              <td className="p-4">
                <button
                  className="
                    bg-blue-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}