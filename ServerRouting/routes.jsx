var Login = require ('./components/Login');
var ProjectsList = require ('./components/ProjectsList');
var AdminPage = require ('./components/AdminPage');
var AddProject = require ('./components/AddProject')
var Test = require ('./App')
var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
// import React from 'react';
// import {
//     Router,
//     Route,
//     IndexRoute,
//     browserHistory
// } from 'react-router';

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" element={<Test/>}/>  
        
        <Route path="/projects" element={<ProjectsList />}  />

        <Route path="/login" element={<Login />} />    

        <Route path="/adminpage" element={<AdminPage />} />

        <Route path="/addproject" element={<AddProject />} />
    </Router>
)