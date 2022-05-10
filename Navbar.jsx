import React, { useState } from "react";
import NavMenu from "./NavMenu.jsx"
import { NavData } from "./NavData.jsx"

export default function NavBar(){
    const [nav, setNavOpen] = React.useState(false)
    
    const testFunc = () => {
      setNavOpen(!nav)
    }
    
    return (
        <nav className="navbar">
          <div>Logo</div>
          <button onClick={testFunc}>{nav ? "close" : "open"}</button>
          <ul className={nav ? "navbar-nav open" : "navbar-nav"}>
            { NavData.map((item, index) => <NavMenu key={index} item={item} setNav={testFunc} />) }
          </ul>
        </nav>
    )
}
