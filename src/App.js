import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './Header'
import Form from './Form'
import List from './List'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState({});
  const [currentTodo, setCurrentTodo] = useState({ 
    title: "", 
    description: ""
  });  // Store the current todo being edited
  const [ loading, setLoading ] = useState(true)


  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  const fetchData = async() => {
    try {
        const response =await axios.get("http://127.0.0.1:8000/todo/")
        setTodos(response.data.data)
        setLoading(false)
        // console.log(response.data.data)
        
    } catch (error) {
        console.log(error.response)
        setLoading(true)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="container">
      <div className="image-bg">
        <img src="./images/bg-desktop-light.jpg" style={{
          width: "100%",
          height: "100%",
        }} alt="" />
      </div>
      <div className="main m-0">
        <Header 
          search={search}
          setSearch={setSearch}
        />
        <Form 
          todos={todos} 
          setTodos={setTodos}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo} 
        />
        <List  
          todos={todos} 
          setTodos={setTodos}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          filteredTodos={filteredTodos}
          completed={completed}
          setCompleted={setCompleted}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}

export default App;
