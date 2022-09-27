var Login = require ('./components/Login');
var ProjectsList = require ('./components/ProjectsList');
var AdminPage = require ('./components/AdminPage');
var AddProject = require ('./components/AddProject')
var Test = require ('./App')

module.exports = (
    <Router>
        <Route path="/" element={<Test/>}/>  
        
        <Route path="/projects" element={<ProjectsList />}  />

        <Route path="/login" element={<Login />} />    

        <Route path="/adminpage" element={<AdminPage />} />

        <Route path="/addproject" element={<AddProject />} />
    </Router>
)