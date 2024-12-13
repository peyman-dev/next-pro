'use client'

import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'

// Custom button component
const Button = ({ children, onClick, className = '' }) => (
  <button
    className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

// Custom toolbar component
const Toolbar = ({ onSave, onClear }) => (
  <div className="flex justify-end space-x-2 mb-4">
    <Button onClick={onSave}>Save</Button>
    <Button onClick={onClear} className="bg-red-600 hover:bg-red-700">
      Clear
    </Button>
  </div>
)

// Main Editor component
const Editor = () => {
  const [editorData, setEditorData] = useState('')

  const handleSave = () => {
    console.log('Saving:', editorData)
    // Implement your save logic here
  }

  const handleClear = () => {
    setEditorData('')
  }

  const customClassicEditor = ClassicEditor.builtinPlugins.concat([CodeBlock])

  const editorConfiguration = {
    plugins: customClassicEditor,
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'codeBlock',
      '|',
      'undo',
      'redo'
    ],
    codeBlock: {
      languages: [
        { language: 'plaintext', label: 'Plain text' },
        { language: 'javascript', label: 'JavaScript' },
        { language: 'python', label: 'Python' }
      ]
    }
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">CKEditor with Code Blocks</h1>
      <Toolbar onSave={handleSave} onClear={handleClear} />
      <div className="border rounded-lg overflow-hidden">
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data={editorData}
          onChange={(event, editor) => {
            const data = editor.getData()
            setEditorData(data)
          }}
        />
      </div>
    </div>
  )
}

export default Editor

