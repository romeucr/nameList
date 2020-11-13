import React from 'react'
import './styles.scss'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => (
   <nav className="row bg-primary main-nav">
      <div className="col-2">
         <Link to="/" className="nav-logo-text">
            <h4>nameList</h4>
         </Link>
      </div>
      <div className="col-6">
         <ul className="main-menu">
            <li>
               <NavLink to="/" activeClassName="active" exact>
                  HOME
               </NavLink>
            </li>
            <li>
               <NavLink to="/search" activeClassName="active">
                  SEARCH
               </NavLink>
            </li>
         </ul>
      </div>
   </nav>
)

export default Navbar