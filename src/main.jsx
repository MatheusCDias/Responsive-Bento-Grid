import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './components/Grid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid />
  </StrictMode>,
)
