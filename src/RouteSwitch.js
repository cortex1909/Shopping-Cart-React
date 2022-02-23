import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Webshop from './Pages/Webshop'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/webshop" element={<Webshop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
