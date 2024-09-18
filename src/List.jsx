import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";


const List = () => {

    const [checked, setChecked] = React.useState(false)

    return (
        <div className="todos shadow">
      <div className="todo p-2 px-3 border-bottom d-flex align-items-center gap-3">


        <div className="desc">

          <p className="fw-bold">Alx task yet to be done</p>
          <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doemque, sint a. Sit ratione cum libero nobis maxime dolor rerum perspiciatis.</small>
        </div>
        <div className="actions gap-2 m-0 d-flex flex-column align-items-center">
            <FaRegEdit />
            <FaRegTrashAlt />
            {
                checked ? <FaRegCheckSquare /> : <FaRegSquare />
            }
          
        </div>
      </div>

      <div className="todo p-2 px-3 border-bottom d-flex align-items-center gap-3">
        <div className="desc">
          <p className="fw-bold completed">Alx Task has been completed</p>
          <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doemque, sint a. Sit ratione cum libero nobis maxime dolor rerum perspiciatis.</small>
        </div>
        <div className="actions m-0 gap-2 d-flex flex-column align-items-center">
            <FaRegEdit />
            <FaRegTrashAlt />
            {
                checked ? <FaRegCheckSquare /> : <FaRegSquare />
            }
          
        </div>
      </div>


      <div className="todo-footer d-flex align-items-center justify-content-between p-2 px-3 border-top">
        <small>4 items left</small>
        <div className="d-flex gap-3">
          <small>All</small>
          <small>Active</small>
          <small>Completed</small>
        </div>
        <small>Clear Completed</small>
      </div>
    </div>
    )
}

export default List 