import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main.jsx'
import Summary from './components/Summary.jsx'
import Form from './components/Form.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const API_URL= "https://api.tvmaze.com/search/shows"


function App() {
	const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState([]);
  useEffect(() => {
    searchShows("all");
  }, []);
   const searchShows = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();

    setShows(data);
  }; 
  const [count, setCount] = useState(0)

  return (
    <>
	<div className="search">
    <input type="text" className="search__input" placeholder="Search for shows" value ={searchTerm} onChange ={(e) => setSearchTerm(e.target.value)} />
    <button className="search__button" onClick ={()=> searchShows(searchTerm)}>
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div>
    <BrowserRouter>
      
	  <Routes>
	  <Route path = "/" element = {<Main shows = {shows}/>} />
	  <Route path = "/summary/:id" element = {<Summary shows={shows} />} />
	  <Route path = "/form" element={<Form />}/>
	  </Routes>
      
    </BrowserRouter>
	</>
  )
}

export default App