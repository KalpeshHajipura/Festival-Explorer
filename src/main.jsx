import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import GujaratFestival from './GujaratFestival.jsx'
import NationalFestival from './NetaionalFestival.jsx'
import FestivalImage from './FestivalImage.jsx'
import FestivalMedia from './FestivalMedia.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero/>
    <GujaratFestival />
    <NationalFestival />
    <FestivalImage/>
    <FestivalMedia/>
    <Footer/>
  </StrictMode>,
)
