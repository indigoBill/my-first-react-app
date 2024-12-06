import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Greeting, FoodGreeting, HtmlToJsx } from './Greeting.jsx'
import DisplayLists from './List.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
    <App />
    <Greeting/>
    <FoodGreeting/>
    <HtmlToJsx/> 
    */}

    <DisplayLists />
  </StrictMode>
)
