import { useState } from 'react'

// import './App.css'
import Container  from './components/Container'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
   
    <Container/>
    {<Header/>}
    {<Sidebar/>}
    </>
  )
}

export default App
