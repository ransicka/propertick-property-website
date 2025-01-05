import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Sales from './pages/Sales'
import ContactUs from './pages/ContactUs'
import PropertyDetails from './components/PropertyDetails'
import WishlistSidebar from './components/WishlistSidebar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <WishlistSidebar />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App