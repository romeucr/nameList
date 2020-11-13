import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteHeader = () => (
   <header className="site-header">
      <h1 className="site-header-title">
         <NavLink to="/" exact>
            nameList App - names from everywhere!
         </NavLink>
      </h1>
   </header>
)

export default SiteHeader