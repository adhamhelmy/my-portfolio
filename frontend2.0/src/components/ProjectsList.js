import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from 'react';
import ProjectData from "../Services/Project"
import Navbar from "../components/Navbar"




const ProjectsList = props => {
  
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    retrieveProjects();  
  }, []);
  
  const retrieveProjects = () => {
    ProjectData.getAll()
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  
  
  
  return (
    <div >
      <Navbar />
      <div className="App-header">
      
        {
            projects.length > 0 ?
            projects.map((project) => {
            return(
            <div className="card" key={project._id} style={{width: 450, backgroundColor: "#282c34", margin: 10}}>
                    <div className="card-body">
                        <h3 className="card-title">{project.name}</h3>
                        <p className="card-text">{project.description}</p>
                        <a href={project.url} target="_blank" className="btn btn-primary">Open</a>
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
      </div>
    </div>
  );
  
  
}

export default ProjectsList;
