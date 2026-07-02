import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const buttonClass =
  "px-3 py-1 border rounded text-sm transition-colors hover:bg-slate-100";
const activeButtonClass = "bg-slate-900 text-white border-slate-900";

export default function TiptapEditor({ content = "", onChange = () => {} }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-slate max-w-none min-h-[320px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    const nextContent = content || "";

    if (editor.getHTML() !== nextContent) {
      editor.commands.setContent(nextContent, { emitUpdate: false });
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const textLength = editor.getText().length;
  const maxLength = 50000;
  const isNearLimit = textLength > maxLength * 0.9;

  return (
    <div className="border rounded bg-white overflow-hidden shadow-sm">
      <div className="flex flex-wrap gap-2 border-b bg-gray-50 p-3">
        <button
          type="button"
          aria-label="Negrito"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${buttonClass} ${editor.isActive("bold") ? activeButtonClass : ""}`}
        >
          B
        </button>

        <button
          type="button"
          aria-label="Itálico"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${buttonClass} ${editor.isActive("italic") ? activeButtonClass : ""}`}
        >
          I
        </button>

        <button
          type="button"
          aria-label="Título 1"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${buttonClass} ${editor.isActive("heading", { level: 1 }) ? activeButtonClass : ""}`}
        >
          H1
        </button>

        <button
          type="button"
          aria-label="Título 2"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${buttonClass} ${editor.isActive("heading", { level: 2 }) ? activeButtonClass : ""}`}
        >
          H2
        </button>

        <button
          type="button"
          aria-label="Lista com marcadores"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${buttonClass} ${editor.isActive("bulletList") ? activeButtonClass : ""}`}
        >
          Lista
        </button>

        <button
          type="button"
          aria-label="Lista numerada"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${buttonClass} ${editor.isActive("orderedList") ? activeButtonClass : ""}`}
        >
          1. Lista
        </button>

        <button
          type="button"
          aria-label="Citação"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${buttonClass} ${editor.isActive("blockquote") ? activeButtonClass : ""}`}
        >
          “ ”
        </button>

        <button
          type="button"
          aria-label="Bloco de código"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${buttonClass} ${editor.isActive("codeBlock") ? activeButtonClass : ""}`}
        >
          {'<>'}
        </button>

        <button
          type="button"
          aria-label="Desfazer"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().undo().run()}
          className={buttonClass}
        >
          ↶
        </button>

        <button
          type="button"
          aria-label="Refazer"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => editor.chain().focus().redo().run()}
          className={buttonClass}
        >
          ↷
        </button>
      </div>

      <EditorContent editor={editor} className="min-h-[320px] p-6 prose max-w-none" />

      <div className={`border-t bg-gray-50 px-4 py-2 text-sm ${isNearLimit ? "text-red-600" : "text-gray-500"}`}>
        {textLength}/{maxLength} caracteres
      </div>
    </div>
  );
}