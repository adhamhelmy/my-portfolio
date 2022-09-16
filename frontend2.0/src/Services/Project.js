import http from "../http-common";


class ProjectData {
    getAll() {
        return http.get('http://localhost:5000/api/v1/projects');
    }

    createProject(data) {
        return http.post("http://localhost:5000/api/v1/projects/add/", data);
    }

    deleteProject(data) {
        console.log(data._id)
        return http.delete("http://localhost:5000/api/v1/projects/delete?id="+data._id, data);
    }
}

export default new ProjectData();