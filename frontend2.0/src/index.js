import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import {StrictMode} from 'react';
import ProjectsList from './components/ProjectsList';
import Navbar from './components/Navbar';



import AdminPage from './components/AdminPage';
import AddProject from './components/AddProject'
import Test from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>  
        
        <Route path="/projects" element={<ProjectsList />}  />

        <Route path="/login" element={<Login />} />    

        <Route path="/adminpage" element={<AdminPage />} />

        <Route path="/addproject" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
);



