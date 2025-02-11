import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import QRScanner from './QRScanner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QRScanner />
  </StrictMode>,
)
