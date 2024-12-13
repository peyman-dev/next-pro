// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextEditorMenuBar from "./Toolbar.tsx";
// import CodeBlock from "@tiptap/extension-code-block";
// import TextDirection from "tiptap-text-direction";
// import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

// type TextEditorProps = {
//   onChange: (content: string) => void;
//   initialContent?: string; // Add this line
// };

// export default function TextEditor({
//   onChange,
//   initialContent,
// }: TextEditorProps) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       TextDirection.configure({
//         types: ["heading", "paragraph"],
//       }),
//       CodeBlock,
      
//     ],

//     content: initialContent,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//     editorProps: {
//       attributes: {
//         class:
//           "min-h-[150px] cursor-text rounded-md border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
//       },
//     },
//     immediatelyRender: false,
//   });
//   return (
//     <div>
//       <TextEditorMenuBar editor={editor} />
//       <EditorContent editor={editor} />
//     </div>
//   );
// }

import React from 'react'

const Editor = () => {
  return (
    <div>Editor</div>
  )
}

export default Editor