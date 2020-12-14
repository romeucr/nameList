import React from 'react'
import logo from '../../core/assets/images/euskaltzaindia-logoa.png'
import ButtonIcon from '../../core/components/ButtonIcon'
import { Link } from 'react-router-dom'
import './styles.scss'

const Home = () => (
   <div className="home-container">
      <div className="home-content row">
         <div className="col-6">
            <h1 className="text-title">Home</h1>
            <p className="text">
               The names used in this site were colected from
               <a href="https://www.euskaltzaindia.eus/en/" target="_blank" rel="noreferrer"> Euskaltzaindia's website</a>.
            </p>
            <p>
               Euskaltzaindia is the Royal Academy of the Basque Language (1919) and the official body responsible for Basque, that is the Basque language.
            </p>
            <p>
               It carries out research on the language and its object is to safeguard it; the Academy has formulated the rules for the normalisation of the language.
            </p>
         </div>
         <div className="img-btn-container col-6">
            <a href="https://www.euskaltzaindia.eus/en/" target="_blank" rel="noreferrer">
               <img src={logo} alt="Euskaltzaindia's logo." className="main-image" />
            </a>
            <div className="btn-search">
               <Link to="/search">
                  <ButtonIcon  text="Search Names" />
               </Link>
            </div>
         </div>
      </div>
   </div>
)

export default Home