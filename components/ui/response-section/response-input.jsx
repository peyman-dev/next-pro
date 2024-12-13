"use client"
import React, { useState } from 'react'
import TextEditor from '../Editor/Editor'

const ResponseInput = () => {
    const [content, setContent] = useState("")
    
  return (
    <div>
        <TextEditor 
        initialContent={content}
        onChange={setContent}
        />
    </div>
  )
}

export default ResponseInput