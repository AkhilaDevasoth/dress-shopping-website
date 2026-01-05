import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import { CartProvider } from './components/CartContext'
import { SearchProvider } from './components/SearchContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import MensWear from './components/MensWear'
import WomensWear from './components/WomensWear'
import KidsWear from './components/KidsWear'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/mens" element={<MensWear />} />
                  <Route path="/womens" element={<WomensWear />} />
                  <Route path="/kids" element={<KidsWear />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  )
}

export default App
