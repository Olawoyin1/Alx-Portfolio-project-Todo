import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

const List = ({todos, setTodos, setIsEditing, isEditing, currentTodo, setCurrentTodo, filteredTodos, completed, setCompleted, loading, setLoading}) => {
 


  
    const markComplete = (id, status) => {
        axios.patch(`http://localhost:8000/todo/${id}/`, {
            status: !status  // Toggle the current status
          })
          .then((response) => {
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));  // Update state
            toast.success('Todo completed!');
          })
          .catch((error) => {
            toast.error('Error updating todo status!');
          });
    };


    // Edit a todo
    const editTodo = async (id) => {
        
        try {
            const response =await axios.get(`http://127.0.0.1:8000/todo/${id}/`)
            // setTodos(response.data.data)
            console.log(response.data.data)
            setIsEditing(true)
            setCurrentTodo(response.data.data);
            
        } catch (error) {
            console.log(error.response)
        }
    };


    // const deleteTodo = (id) => {
    //     axios.delete(`http://localhost:8000/todo/${id}/`)
    //     .then(() => {
    //       setTodos(todos.filter(todo => todo.id !== id));
    //       console.log(todos) // Remove the deleted todo from the list
    //       toast.success('Todo deleted successfully!');
    //     })
    //     .catch((error) => {
    //       toast.error("There was an error deleting the todo!");
    //     });
    // };
    
    const delTodo = (id) =>{
      try {
        axios.delete(`http://localhost:8000/todo/${id}/`);
        setTodos(todos.filter((todo)=> todo.id !== id))
        toast.success('Todo deleted successfully!');
      } catch (error) {
        toast.error(error.message)
      }

    }
    
      

  return (


    <div className="todos m-0 shadow">
      {/* {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo pb-3 border-bottom d-flex align-items-center gap-3">
            <div className="desc">
              <p className="fw-bold">{todo.title}</p>
              <small className="text-muted">{todo.description}</small>
            </div>
            <div className="actions m-0 d-flex flex-column align-items-center">
              
              <button onClick={() => editTodo(todo.id)}><FaRegEdit /></button>
              <button  onClick={() => deleteTodo(todo.id)}><FaRegTrashAlt /></button>
              
              <button onClick={() => markComplete(todo.id, todo.status)}>
                 {todo.status ? <FaRegCheckSquare /> : <FaRegSquare />}
             </button>
            </div>
          </div>
        );
      })} */}


        {
          loading ? (<p className="p-3 lead">Loading your todos...</p>)
           : 
           (
            <div>

           
            { filteredTodos.length > 0 ? (
              filteredTodos.map(todo => (
                <div key={todo.id} className="todo pb-3 border-bottom d-flex align-items-center gap-3">
                <div className="desc">
                  <p className="fw-bold">{todo.title}</p>
                  <small className="text-muted">{todo.description}</small>
                </div>
                <div className="actions m-0 d-flex flex-column align-items-center">
                  
                  <button onClick={() => editTodo(todo.id)}><FaRegEdit title="folder icon" color="blue" /></button>
                  <button  onClick={() => delTodo(todo.id)}><FaRegTrashAlt /></button>
                  
                  <button onClick={() => markComplete(todo.id, todo.status)}>
                     {todo.status ? <FaRegCheckSquare /> : <FaRegSquare />}
                 </button>
                </div>
              </div>
              ))
            ) : (
              <p className="p-3 lead">No todos match your search.</p>
            )}

          </div>

          )
        }

        
      <Toaster />


      {/* <div className="todo-footer d-flex align-items-center justify-content-between p-2 px-3 border-top">
        <small>4 items left</small>
        <div className="d-flex gap-3">
          <small>All</small>
          <small>Active</small>
          <small>Completed</small>
        </div>
        <small>Clear Completed</small>
      </div> */}
    </div>
  );
};

export default List;
