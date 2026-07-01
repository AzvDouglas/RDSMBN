export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Pesquise pela palavra-chave: "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          p-4
          border
          border-gray-300
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-[#00A8E8]
        "
      />
    </div>
  );
}