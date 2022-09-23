import { Link } from "react-router-dom"
import { BrowserHistory } from "history";
import { Historys } from "history";

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
                </li>
                <li className="nav-item" >            
                <Link to={"/login"} className="nav-link" style={{color:"white"}}>
                    Login
                </Link>
                </li>
            </ul>
        </nav>
    )
    
  }
  export default Navbar;