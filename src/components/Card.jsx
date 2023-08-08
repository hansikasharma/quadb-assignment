import { Link } from 'react-router-dom';
function Card ({show}){
	
	const defImg = "NO "
	return (
	<>
	<div className="card">
    <div className="card-image"><img  className = "card-image" src ={show.show.image===null?defImg:show.show.image.medium} alt = "" /></div>
    <div className="category">{show.show.language}</div>
    <div className="heading">{show.show.name===null?"Notfound":show.show.name}
        <div className="author">  <span className="name">{show.show.genres.join(", ")}</span></div>
		<div className="category"><Link to = {"/summary/"+show.show.id}>Summary</Link></div>
    </div>
</div>
	</>
	)
}
export default Card;