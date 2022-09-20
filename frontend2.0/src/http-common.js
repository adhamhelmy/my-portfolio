import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL || "https://my-portfolio-first-app.herokuapp.com/api/v1/projects",
  headers: {
    "Content-type": "application/json"
  }
});