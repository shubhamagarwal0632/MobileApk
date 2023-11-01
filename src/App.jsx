import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cartpage from './components/Cartpage'

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductCard />} />
          <Route path='/cart' element={<Cartpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
