import { Editor } from "@tinymce/tinymce-react";

export default function RichTextEditor({
  value,
  onChange,
}) {
  return (
    <Editor
    apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      value={value}
      onEditorChange={(content) => {
        onChange(content);
      }}
      init={{
        height: 500,

        menubar: true,

        plugins: [
          "lists",
          "link",
          "image",
          "table",
          "code",
          "wordcount",
        ],

        toolbar:
          "undo redo | " +
          "blocks | " +
          "bold italic underline | " +
          "alignleft aligncenter alignright | " +
          "bullist numlist | " +
          "link image | " +
          "removeformat",
      }}
    />
  );
}