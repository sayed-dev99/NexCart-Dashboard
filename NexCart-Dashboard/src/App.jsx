// import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import TodoList from "./components/TodoList";



export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Login /> */}

        <TodoList/>

      </AuthProvider>
    </BrowserRouter>
  );
}

