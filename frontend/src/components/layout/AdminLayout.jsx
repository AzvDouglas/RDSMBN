import Sidebar from "../admin/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}