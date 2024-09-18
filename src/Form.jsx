import React from 'react'


const Form = () => {
    return (
        <div className="row m-0">
      <div className="col-sm-4 m-0 p-0 ">
        <form action="" className="m-0">
          <label for="title" className="text-dark text-md-white fw-bold">Title</label>
          <input type="text" className="shadow-sm input my-2" placeholder="Create a new todo..." />
        </form>
      </div>
      <div className="col-sm-8 p-0 ps-1">
        <form action="" >
          <label for="desc" className="text-sm-white fw-bold">Description</label>
          <input type="text" className="shadow-sm input my-2" placeholder="Description ..." />
        </form>
      </div>


    </div>
    )
}

export default Form