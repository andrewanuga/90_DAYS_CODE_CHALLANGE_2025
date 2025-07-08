import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ClickSpark from './components/ClickSpark.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClickSpark>
  </React.StrictMode>,
)
