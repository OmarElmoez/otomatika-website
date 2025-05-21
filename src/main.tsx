import { createRoot } from 'react-dom/client'
import './global.css'
import Routes from './routes/Routes.tsx'
createRoot(document.getElementById('root')!).render(<Routes />)
