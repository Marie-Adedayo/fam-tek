import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'


export default function App(){
  return (
    <div>        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search/:q" element={<Search />} />
            <Route path="/category/:name" element={<Home />} />
          </Routes>
      
      </div>
  
  )
}
