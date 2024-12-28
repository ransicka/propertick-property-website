import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Sales from './pages/Sales'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App