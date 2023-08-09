import { Link } from 'react-router-dom';
const defShow = {"score":0.7016427,"show":{"id":2942,"url":"https://www.tvmaze.com/shows/2942/childhoods-end","name":"Childhood's End","type":"Scripted","language":"English","genres":["Drama","Science-Fiction"],"status":"Ended","runtime":120,"averageRuntime":120,"premiered":"2015-12-14","ended":"2015-12-16","officialSite":"http://www.syfy.com/childhoodsend","schedule":{"time":"20:00","days":["Monday"]},"rating":{"average":7.4},"weight":96,"network":{"id":16,"name":"Syfy","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":null},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":35425,"thetvdb":296065,"imdb":"tt4146128"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78541.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/31/78541.jpg"},"summary":"<p>Written by Arthur C. Clarke and hailed as a revolutionary work of science fiction since its publishing in 1953, <b>Childhood's End </b>follows the peaceful alien invasion of Earth by the mysterious \"Overlords,\" whose arrival begins decades of apparent utopia under indirect alien rule, at the cost of human identity and culture.</p>","updated":1687309383,"_links":{"self":{"href":"https://api.tvmaze.com/shows/2942"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/209079"}}}};
function Card ({show}){
	console.log(show);
	const defImg = "NO "
	return (
	<>
	<div className="card">
    <div className="card-image"><img  className = "card-image" src ={show.show.image===null?defImg:show.show.image.medium} alt = "" /></div>
    <div className="category">{show.show.language}</div>
    <div className="heading">{show.show.name===null?"Notfound":show.show.name}
        <div className="author">  <span className="name">{show.show.genres.join(", ")}</span></div>
<div className="category"><Link to = {"/summary/"+show.show.id} state={{ show:show }}>Summary</Link></div>
    </div>
</div>
	</>
	)
}
export default Card;