import AdminLayout from "../../components/layout/AdminLayout";
import NewsForm from "../../components/admin/NewsForm";

export default function AdminNewsCreatePage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-2">
        Postagens
      </h1>

      <p className="text-gray-600 mb-8">
        Gerenciamento de Postagens
      </p>

      <NewsForm />
    </AdminLayout>
  );
}