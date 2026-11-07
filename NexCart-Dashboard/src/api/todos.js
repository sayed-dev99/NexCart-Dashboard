import api from "./axios";



export const getTodos = () =>
    api.get("/todos", { params: { _limit: 10 } });

export const addTodo = (title) =>
    api.post("/todos", { title, completed: false });

export const toggleTodo = (id, completed) =>
    api.patch(`/todos/${id}`, { completed });

export const deleteTodo = (id) =>
    api.delete(`/todos/${id}`);