import {Routes, Route, Link, BrowserRouter} from "react-router-dom"


const AdminNavbar = () => {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <a href="/adminpage" className="navbar-brand">
                <h2>AdminPage</h2>
            </a>
            <div className="nav">
                {/* <li className="nav-item">
                <Link to={"/projects"} className="nav-link" style={{color:"white"}}>
                    Projects
                </Link>
                </li> */}
                <li className="nav-item" >            
                <Link to={"/"} className="nav-link" style={{color:"white"}}>
                    Logout
                </Link>
                </li>
            </div>
        </nav>
    )
    
  }
  export default AdminNavbar;