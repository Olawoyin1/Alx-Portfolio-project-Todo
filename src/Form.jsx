import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = ({
  todos,
  setTodos,
  setIsEditing,
  isEditing,
  currentTodo,
  setCurrentTodo,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const updateTodo = (event) => {
    const { name, value } = event.target;
    setCurrentTodo((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };




  // Add a new todo
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8000/todo/", formData)
  //     .then((response) => {
  //       setTodos([...todos, response.data.data]); // Add the new todo to the list
  //       toast.success('Todo added successfully!');
  //       setFormData({
  //         title: "",
  //         description: "",
  //       }); // Reset the input field
  //     })
  //     .catch((error) => {
  //       console.error("There was an error creating the todo!", error);
  //     });
  // };


  const handleSubmit2 = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/todo/', formData)
      setTodos([...todos, response.data.data]);
      toast.success("Todo added to the List")
      setFormData({
        title: "",
        description: ""
      })
    } catch (error) {
      toast.error(error.message)
    }
  }


  const handleUpdate = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/todo/${currentTodo.id}/`, currentTodo, {
        headers : { 'Content-Type': 'application/json', "Accept": "application/json" },  
      })
    //   response = 
      .then((response) => {
        // setTodos(todos.map(todo => (todo)));
        setTodos(todos.map(todo => (todo.id === currentTodo.id ? response.data.data : todo)));
        setIsEditing(false);
        toast.success('Todo updated successfully!');  
        setCurrentTodo({
          title: "",
          description: "",
        }); // Reset the input field
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
        
        <div className="row align-items-center m-0">
          <div className="col-sm-4 m-0 p-0 ">
            <form action="" className="m-0">
              <label
                htmlFor="title"
                className=" text-white fw-bold"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="shadow-sm input my-2"
                placeholder={isEditing ? "Edit yout todo ..." : "Create a new todo..." }
                value={isEditing? currentTodo.title : formData.title}
                onChange={isEditing ? updateTodo : handleChange}
              />
            </form>
          </div>
          <div className="col-sm-7 p-0 ps-1">
            <form action="">
              <label htmlFor="desc" className="text-white fw-bold">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="shadow-sm input my-2"
                placeholder="Description ..."
                value={isEditing? currentTodo.description : formData.description}
                onChange={isEditing ? updateTodo : handleChange}
              />
            </form>
          </div>
          <div className="col-sm-1 m-0">
            <button
              type="submit"
              onClick={isEditing ? handleUpdate : handleSubmit2}
              className="btn btn-primary mt-sm-4"
            >
                {isEditing ? "Edit" : "Add" }
            
            </button>
          </div>
          <Toaster />
        </div>

    
  );
};

export default Form;
