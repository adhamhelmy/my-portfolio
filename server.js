const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.PROJECTS_DB_URI;
mongoose.connect(uri);
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
app.use("/api/v1/projects", projectsRouter)

if(process.env.NODE_ENV=== 'production') {
    app.use(express.static('frontend2.0/build'));
}



app.listen(port, ()=> {
    console.log('server is running on port: ' + port)
});


