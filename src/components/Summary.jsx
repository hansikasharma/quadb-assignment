import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
function Summary({shows}){
	const params = useParams();
	const getShow = params;
	// console.log(show);
	// console.log(shows);
	const keys = Object.keys(shows);
	let foundShow = null;
	
	
	for(let i=0;i<keys.length;i++ ){
		
		
		if(shows[keys[i]].show.id.toString(10) === getShow.id){
			
			foundShow= shows[keys[i]].show;
			break;
		}
	}
 
	
	
	return (<>
	<div className = "summary-card">{parse(foundShow.summary)}</div>
	<Link to = {"/form"}><input type = "submit" value = "book-tickets" name = "booktic" className = "submit"/></Link>
	</>
	
	)
}
export default Summary;