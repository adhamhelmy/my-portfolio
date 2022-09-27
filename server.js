const express = require('express');
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');
const ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var Login = require ('./components/Login');

var ProjectsList = require ('./components/ProjectsList');
var AdminPage = require ('./components/AdminPage');
var AddProject = require ('./components/AddProject')
var Test = require ('./App')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.PROJECTS_DB_URI || 'mongodb://adhamhelmy:adhamhelmy@ac-oxr6seb-shard-00-00.32isubn.mongodb.net:27017,ac-oxr6seb-shard-00-01.32isubn.mongodb.net:27017,ac-oxr6seb-shard-00-02.32isubn.mongodb.net:27017/?ssl=true&replicaSet=atlas-zmtjs7-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(uri , {
    useNewUrlParser: false,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', ()=> {
    try {
        console.log("MongoDB database connection established successfully");
    }
     catch (error) {
        console.log(error)
    }
});
const projectsRouter = require('./backend/api/projects.route');
const { request } = require('http');
app.use("/api/v1/projects", projectsRouter)

if(process.env.NODE_ENV=== 'production') {
    app.use(express.static('frontend2.0/build'));
}
// code above was addd for deployment
app.use(express.static(__dirname + '/public'))
function reducer(state) { return state; }
app.get('/*', function (req, res){
    var initialState = { title: 'Universal React' };
    var store = Redux.createStore(reducer, initialState);
    
    ReactRouter.matchRoutes({
        routes: (
            <Router>
                <Route path="/" element={<Test/>}/>  
                
                <Route path="/projects" element={<ProjectsList />}  />

                <Route path="/login" element={<Login />} />    

                <Route path="/adminpage" element={<AdminPage />} />

                <Route path="/addproject" element={<AddProject />} />
            </Router>
        ),
        location: request.url
    },
    function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <ReactRouter.RouterContext {...renderProps} />
                </Provider>
            );
            res.send(html);
        } else {
            res.status(404).send('Not Found');
        }
    });
    //res.sendFile(path.join(__dirname, 'frontend2.0/public/index.html'))
  })
  app.get('/projects', function (req, res){
    //res.json(__dirname)
    
    res.sendFile(path.join(__dirname, 'frontend2.0/public/projects.html'))
  })
  
  

app.listen(port, ()=> {
    console.log('server is running on port: ' + port)
});


