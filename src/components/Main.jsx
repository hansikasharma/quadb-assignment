import {useState,useEffect} from 'react';
import Card from "./Card.jsx"

function Main({shows}){
	
	

return (

<>

 {
	   shows?.length>0?
	   (<div className="container">
	   
	   {shows.map((show)=>(
	   <Card show={show} />
	   ))}
	   </div>
	   ):
	   (
	<div className="Empty"><h2>No movies found</h2>
	</div>
	)
   }

</>
)
}
export default Main;