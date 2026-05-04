// ════ FONTSOURCE — Bruna Casagrande ════
// Spectral (display) + Jost (sans)
import '@fontsource/spectral/300.css'
import '@fontsource/spectral/400.css'
import '@fontsource/spectral/400-italic.css'
import '@fontsource/spectral/700.css'
import '@fontsource/jost/300.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
// ════ FIM FONTSOURCE ════

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)