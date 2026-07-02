import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function NewsForm() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    cover_image: "",
  });

  return (
    <form className="space-y-6">

        <input
        type="text"
        placeholder="Título"
        value={formData.title}
        onChange={(e) =>
            setFormData({
            ...formData,
            title: e.target.value,
            })
        }
        className="
            w-full
            border
            rounded
            p-4
            shadow-sm
        "
        />

        <textarea
        placeholder="Descrição"
        rows="3"
        value={formData.excerpt}
        onChange={(e) =>
            setFormData({
            ...formData,
            excerpt: e.target.value,
            })
        }
        className="
            w-full
            border
            rounded
            p-4
            shadow-sm
        "
        />

      <input
        type="text"
        placeholder="URL da imagem de capa"
        value={formData.cover_image}
        onChange={(e) =>
            setFormData({
            ...formData,
            cover_image: e.target.value,
            })
        }
        className="
            w-full
            border
            rounded
            p-4
            shadow-sm
        "
        />



        <RichTextEditor
          value={formData.content}
          onChange={(content) =>
            setFormData({
              ...formData,
              content,
            })
          }
        />
        
      <div className="flex justify-center gap-4 pt-6">

        <button
          type="submit"
          className="
            bg-green-500
            text-white
            px-8
            py-2
            rounded
            font-bold
          "
        >
          ADICIONAR
        </button>

        <button
        type="button"
        disabled
        className="
            bg-blue-600
            text-white
            px-8
            py-2
            rounded
            opacity-50
        "
        >
        PREVIEW
        </button>
      </div>

    </form>
  );
}