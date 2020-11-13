import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => (
   <div>
      <h1>Home</h1>
      <p>Aqui vao algumas informacoes sobre de onde eu tirei os dados</p>
      <NavLink to="/search" exact>
            Find names
         </NavLink>
   </div>
)

export default Home