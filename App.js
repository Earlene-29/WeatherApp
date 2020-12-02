import React from 'react'
import Router from './router'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const App =() => {
  return(
    <BrowserRouter>
    <Router/>   
</BrowserRouter>

  )   
}

export default App;
