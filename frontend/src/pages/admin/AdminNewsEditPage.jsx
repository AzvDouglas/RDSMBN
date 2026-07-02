import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../../components/layout/AdminLayout";
import NewsForm from "../../components/admin/NewsForm";

import {
  getNewsById,
  updateNews,
} from "../../services/newsService";

export default function AdminNewsEditPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    cover_image: "",
  });

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await getNewsById(id);

        setFormData({
          title: response.data.title || "",
          excerpt: response.data.excerpt || "",
          content: response.data.content || "",
          cover_image:
            response.data.cover_image || "",
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadNews();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateNews(id, formData);

      navigate("/admin/news");
    } catch (error) {
      console.error(error);

      alert("Erro ao atualizar notícia");
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Editar notícia
      </h1>

      <NewsForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitLabel="ATUALIZAR"
      />
    </AdminLayout>
  );
}