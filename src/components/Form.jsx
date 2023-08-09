import { useParams, Link } from 'react-router-dom';
function Form (){
	const params = useParams();
	const getName = params;
	return (
	<>
	
    <form className="form">
       <p className="form-title">Fill your details to book tickets for {getName.name}</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" />
          <span>
          </span>
      </div>
      <div className="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
         <button type="submit" className="submit">
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>
  <Link to = "/"> <button type = "submit" className = "submit">GO BACK</button></Link>
</>
	)
}
export default Form;