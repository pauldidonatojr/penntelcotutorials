import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import { Home } from './pages/Index.js'

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  </BrowserRouter>
 )
}

export default App
