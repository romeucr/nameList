import React from 'react'
import logo from '../../core/assets/images/euskaltzaindia-logoa.png'
import ButtonIcon from '../../core/components/ButtonIcon'
import { Link } from 'react-router-dom'
import './styles.scss'

const Home = () => (
   <div className="home-container">
      <div className="home-content row">
         <div className="col-6">
            <h1 className="home-title">Home</h1>
            <p>
               The names used in this site were colected from
               <a href="https://www.euskaltzaindia.eus/en/" target="_blank" rel="noreferrer"> Euskaltzaindia's website</a>.
            </p>
            <p>
               Euskaltzaindia is the Royal Academy of the Basque Language (1919) and the official body responsible for Basque, that is the Basque language.
            </p>
            <h4 className="features-title">Features</h4>
            <p>
               <i className="fas fa-check"></i>Show all names <br/>
               <i className="fas fa-check"></i>Search by name <br/>
               <i className="fas fa-times"></i>Admin area with CRUD operations <br/>
               <i className="fas fa-times"></i>Add names from other countries <br/>
               <i className="fas fa-times"></i>Vote/like a name <br/>
               <i className="fas fa-times"></i>Display statistics/graphics of voted/liked names
            </p>
         </div>
         <div className="img-btn-container col-6">
            <a href="https://www.euskaltzaindia.eus/en/" target="_blank" rel="noreferrer" title="Go to Euskaltzaindia's website">
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