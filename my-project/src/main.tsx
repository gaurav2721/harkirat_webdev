import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TranslatePage from './TranslatePage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResultPage from './ResultPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TranslatePage />} />
        <Route path="/result" element={<ResultPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
