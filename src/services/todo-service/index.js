import http from "../../configs/http";

const basePath = "/todos";

class TodoService {
  getAll() {
    return http.get("/todos");
  }

  get(code) {
    return http.get(`/todos/${code}`);
  }

  create(data) {
    return http.post("/todos", data);
  }

  update(code, data) {
    return http.patch(`/todos/${code}`, data);
  }

  delete(code) {
    return http.delete(`/todos/${code}`);
  }

  findByTitle(title) {
    throw new Error("Not implemented");
    //return http.get(`/todos?title=${title}`);
  }
}

export default new TodoService();
