import { useParams, useLocation, Link } from 'react-router-dom';
import parse from 'html-react-parser';


function Summary(props){
	const params = useParams();
	const getShow = params;
	const location = useLocation();
	const shows = location.state?.show;
	console.log(location);
	
	
	
	return (<>
	
	<div className = "summary-card">{parse(shows.show.summary)}</div>
	<Link to = {"/form/"+shows.show.name}><input type = "submit" value = "book-tickets" name = "booktic" className = "submit"/></Link>
	<Link to = "/"><button type = "submit" className = "submit">GO BACK</button></Link>
	</>
	
	)
}
export default Summary;