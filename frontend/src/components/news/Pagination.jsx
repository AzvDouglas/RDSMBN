export default function Pagination({
  currentPage,
  lastPage,
  onPageChange,
}) {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {[...Array(lastPage)].map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-10
              h-10
              rounded-md
              font-semibold
              transition
              ${
                currentPage === page
                  ? "bg-[#00A8E8] text-white"
                  : "bg-[#F2EFEA] text-[#005B46] hover:bg-[#e8e3db]"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}