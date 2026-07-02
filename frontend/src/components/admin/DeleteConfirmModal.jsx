export default function DeleteConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-md
          rounded-lg
          shadow-2xl
          p-8
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-center
            mb-6
          "
        >
          ATENÇÃO!
        </h2>

        <p
          className="
            text-center
            text-gray-700
            mb-8
          "
        >
          Você está prestes a excluir esta postagem.
          Esta ação não poderá ser desfeita após a confirmação.
        </p>

        <div
          className="
            flex
            justify-center
            gap-4
          "
        >
          <button
            onClick={onConfirm}
            className="
              bg-[#005B46]
              text-white
              px-8
              py-2
              rounded
              font-bold
              hover:opacity-90
            "
          >
            CONFIRMAR
          </button>

          <button
            onClick={onCancel}
            className="
              bg-red-600
              text-white
              px-8
              py-2
              rounded
              font-bold
              hover:opacity-90
            "
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}