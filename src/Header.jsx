import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <div className="row m-0 align-items-center justify-content-between mb-3">
        <h3 className="col-sm-2 m-0 p-0 text-white fw-bold">TODO</h3>
        <form action="" className="col-sm-8 search">
          <input type="search" className="shadow-sm input" placeholder="Search Your List..."/>
        </form>
        <MdOutlineDarkMode className='col-sm-1 m-0 p-0' size={20} />
    </div>
  )
}

export default Header