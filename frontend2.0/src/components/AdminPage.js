import './App.css';
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from 'react';
import ProjectData from "../Services/Project"
import AdminNavbar from "../components/AdminNavbar"

//import addproject from 


const AdminPage = props => {
  
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    retrieveProjects();  
  }, []);
  const [value,setValue] = useState();
  const retrieveProjects = () => {
    ProjectData.getAll()
      .then(response => {
        setProjects(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  let navigate = useNavigate();

  function goToAddPost() {
    navigate("../addproject", { replace: true });
  };

  const deletePost = (post) => {
    console.log(post)
    ProjectData.deleteProject(post)
    retrieveProjects();
    setValue({});
  };
  
  
  return (
    <div >
      <AdminNavbar />
      <div className="App-header">
      
        {
            projects.length > 0 ?
            projects.map((project, index) => {
              //console.log(project)
            return(
            <div className="card" key={project._id} style={{ width: 450, backgroundColor: "#282c34", margin: 10}}>
                    <div className="card-body" >
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <p className="card-text">{project.id}</p>
                        <a href={project.url} target="_blank" className="btn btn-primary" style={{margin: 5}}>Open</a>
                        
                        <button  className="btn btn-danger" onClick={() => deletePost(project)} style={{backgroundColor: 'red', margin: 5}}>Delete</button>
                    </div>
            </div>
            )     
            })
            :
            <div>
                <h2>
                  No Projects Yet
                </h2>
            </div>
        }
        <button  className="btn btn-primary" style={{width: 135}} onClick={goToAddPost}>Add post</button>
      </div>
      
    </div>
  );
  
  
  
}

export default AdminPage;