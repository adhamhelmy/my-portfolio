import './App.css';
import {React, useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import AdminNavbar from './AdminNavbar';
import ProjectData from '../Services/Project';
import { useNavigate } from 'react-router';
const AddProject = props => {

  const initialPostState = {
    name: "",
    description: "",
    url: "",
  };

  const [post, setPost] = useState(initialPostState);

  const handleInputChange = event => {
    const { name, descrption, url, value } = event.target;
    setPost({ ...post, [name]: value , [descrption]: value, [url]: value});
    //console.log(post)
  };

  let navigate = useNavigate()

  const addPost = () => {
    ProjectData.createProject(post)
      .then(post => {
        console.log(post);
        navigate("../adminpage", { replace: true });
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div>
      <AdminNavbar />
        
        <div className="App-header" >
          <h2>Add a new project</h2>
            <div className="form-group">
                <label >Project Name</label>
                <input  
                  className="form-control" 
                  id="name" 
                  name="name"  
                  value={post.name} 
                  onChange={handleInputChange}
                  placeholder="Enter name" >
                </input>  
            </div>
            <div className="form-group" style={{width:215}}>
                <label >Project Description</label>
                <textarea  
                  className="form-control" 
                  id="description" 
                  name="description" 
                  value={post.description}  
                  onChange={handleInputChange}
                  placeholder="Enter description" >
                </textarea>  
            </div>
            <div className="form-group">
                <label >URL</label>
                <input  
                  className="form-control" 
                  id="url" 
                  name="url" 
                  value={post.url}  
                  onChange={handleInputChange}
                  placeholder="Enter link" >
                </input>  
            </div>
            
  
            <button type="submit" className="btn btn-primary" onClick={addPost}>Submit</button>
        </div>
    </div>
    
  );
}

export default AddProject;