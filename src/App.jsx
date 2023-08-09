import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main.jsx'
import Summary from './components/Summary.jsx'
import Form from './components/Form.jsx'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <>
	
    <BrowserRouter>
      
	  <Routes>
	  <Route path = "/" element = {<Main />} />
	  <Route path = "/summary/:id" element = {<Summary />} />
	  <Route path = "/form/:name" element={<Form />}/>
	  </Routes>
      
    </BrowserRouter>
	</>
  )
}

export default App
