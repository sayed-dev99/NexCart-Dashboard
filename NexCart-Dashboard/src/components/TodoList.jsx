import {useEffect, useState} from 'react'
import {getTodos} from '../api/todos'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


useEffect(() => {
  getTodos()
    .then((res) => setTodos(res.data))
    .catch(() => setError("Failed to load to dos"))
    .finally(() => setLoading(false));
}, []);


if (loading)
    return (
        <p className="bg-amber-400 text-2xl text-center">
        Loading..........
        </p>
    );

    if (error)
    return (
        <p className="bg-red-900 text-2xl text-center text-white">
        {error}
        </p>
    );


    return (
    // <div>TodoList</div>

        <ul>
    {todos.map((t) => (
        <li key={t.id}>{t.title}</li>
    ))}
    </ul>

    
    );
}


export default TodoList