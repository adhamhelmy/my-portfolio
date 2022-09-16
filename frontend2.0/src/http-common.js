import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1/projects",
  headers: {
    "Content-type": "application/json"
  }
});