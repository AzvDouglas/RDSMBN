import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/layout/AdminLayout";
import NewsForm from "../../components/admin/NewsForm";

import { createNews } from "../../services/newsService";

export default function AdminNewsCreatePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    cover_image: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createNews(formData);

      navigate("/admin/news");
    } catch (error) {
      console.error(error);

      alert("Erro ao criar notícia");
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Nova notícia
      </h1>

      <NewsForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitLabel="ADICIONAR"
      />
    </AdminLayout>
  );
}