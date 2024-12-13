import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Autoformat,
  Bold,
  Italic,
  Underline,
  BlockQuote,
  Base64UploadAdapter,
  CloudServices,
  Essentials,
  Heading,
  Image as ckImage,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
  SimpleUploadAdapter,
  CodeBlock,
  Alignment,
} from "ckeditor5";
// import { SlashCommand } from 'ckeditor5-premium-features';

import "ckeditor5/ckeditor5.css";
import { memo } from "react";

const Editor = memo(({ value, setValue }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "codeBlock",
              "alignment",
              "|",
              "link",
              "uploadImage",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "outdent",
              "indent",
            ],
          },
          plugins: [
            Autoformat,
            BlockQuote,
            Bold,
            CloudServices,
            Essentials,
            Heading,
            ckImage,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Mention,
            Paragraph,
            PasteFromOffice,
            PictureEditing,
            Table,
            TableColumnResize,
            TableToolbar,
            TextTransformation,
            Underline,
            SimpleUploadAdapter,
            CodeBlock,
            Alignment,
          ],
          initialData: `<p>${value}</p>`,
          simpleUpload: {
            // The URL that the images are uploaded to.
            uploadUrl: "http://example.com",

            // Enable the XMLHttpRequest.withCredentials property.
            withCredentials: true,

            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
              "X-CSRF-TOKEN": "CSRF-Token",
              Authorization: "Bearer <JSON Web Token>",
            },

            /* should return obj like { url } or {  "urls": {
                   "default": "https://example.com/images/foo.jpg",
                   "800": "https://example.com/images/foo-800.jpg",
                   "1024": "https://example.com/images/foo-1024.jpg",
                   "1920": "https://example.com/images/foo-1920.jpg"
               }
          */
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
            ],
          },
          image: {
            resizeOptions: [
              {
                name: "resizeImage:original",
                label: "Default image width",
                value: null,
              },
              {
                name: "resizeImage:50",
                label: "50% page width",
                value: "50",
              },
              {
                name: "resizeImage:75",
                label: "75% page width",
                value: "75",
              },
            ],
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "|",
              "imageStyle:inline",
              "imageStyle:wrapText",
              "imageStyle:breakText",
              "|",
              "resizeImage",
            ],
          },
          language: {
            content: "fa",
            ui: "fa",
          },
        }}
        className="!text-black "
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
      
    </>
  );
});

export default Editor;
