import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Products from './Page/Products'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
          <Routes>
            <Route path='/products' element={<Products />}/>
          </Routes>
      </div>
    </>
  )
}

export default App
