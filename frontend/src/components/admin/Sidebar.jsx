import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
        w-64
        min-h-screen
        bg-[#009A76]
        text-white
        p-6
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          mb-10
        "
      >
        Painel Admin
      </h2>

      <nav className="flex flex-col gap-4">

        <Link
          to="/admin/news"
          className="hover:opacity-80"
        >
          Postagens
        </Link>

        <span className="opacity-50">
          Usuários
        </span>

        <span className="opacity-50">
          Calendário
        </span>

        <span className="opacity-50">
          Documentos
        </span>

      </nav>
    </aside>
  );
}