import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import './responsive.css'
import { PortfolioProvider } from './context/Portfolio.context.jsx'
import { CircleLoader } from 'react-spinners'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={
      <CircleLoader
        style={
          {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }
        }
        color='#36d7b7'
      />
    }>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </Suspense>
  </StrictMode>,
)
