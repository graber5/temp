import React, { useState } from "react"
import { NavLink } from 'react-router-dom';

export default function NavMenu({item, setNav}){
    const [open, setOpen] = React.useState(false)
    
    return (
      <React.Fragment>
        {item.childrens ?
          <li className={open ? "menu-item-has-children open" : "menu-item-has-children"}>
              <span onClick={() => setOpen(!open)}>
                  { item.icon && <i className={item.icon}></i> 
                  }
                  {item.title}    
              </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}>
                </i>
                <ul className="sub-menu">
                  { item.childrens.map((child, index) => <NavMenu key={index} setNav={setNav} item={child} />) }
                </ul>
          </li>
          :
          <li className="menu-item">
            <NavLink to={item.path || "#"} className="menu-link" onClick={setNav}>
                { item.icon && <i className={item.icon}></i> 
                }
                {item.title}
            </NavLink>
          </li>
        }
      </React.Fragment>
    )
}
