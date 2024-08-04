import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <>
    <div id='page-container'>
      <div id='content-wrap'>
    <Header />
    <Outlet />
      </div>
    <Footer />
    </div>
    </>
  )
}

export default App
