import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({search, setSearch}) => {
  return (
    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-3">
        <h3 className="text-white h-text fw-bold">TODO</h3>
        <div>
          <form action="" className="search">
            <input
              type="search"
              className="shadow-sm input"
              placeholder="Search Your List..."
              name='search'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </form>
        </div>
        <div>
          <MdOutlineDarkMode 
            style={{
              color:"#ffffff !important",
              cursor: "pointer"
            }}
            size="30px"
            />
        </div>
    </div>
  )
}

export default Header