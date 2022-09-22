import { Link } from "react-router-dom"


const AdminNavbar = () => {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <Link to={"/adminpage"} className="navbar-brand" style={{color:"white"}}>
                <h2>AdminPage</h2>
            </Link>
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