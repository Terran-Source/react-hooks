import 'react-app-polyfill/ie11'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useDebounce } from '../dist'

const inputId = 'txtType'

const App = () => {
  const [text, setText] = useState('')
  const debounceText = useDebounce(setText, 400)

  return (
    <div>
      <label htmlFor={inputId}>Type Here </label>
      <input
        id={inputId}
        type="text"
        onChange={e => debounceText(e.target.value)}
        placeholder="Type something"
      />
      <p>Delayed text: {text}</p>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)
root.render(<App />)
