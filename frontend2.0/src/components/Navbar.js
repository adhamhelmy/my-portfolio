import { Link } from "react-router-dom"
import { BrowserHistory } from "history";

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <a href="/" className="navbar-brand">
                <h2>HomePage</h2>
            </a>
            <ul className="nav"  >
                <li className="nav-item">
                <Link to={"/projects"} className="nav-link" style={{color:"white"}}>
                    Projects
                </Link>
                history.push(location)
                history.replace(location)
                </li>
                <li className="nav-item" >            
                <Link to={"/login"} className="nav-link" style={{color:"white"}}>
                    Login
                </Link>
                history.push(location)
                history.replace(location)
                </li>
            </ul>
        </nav>
    )
    
  }
  export default Navbar;