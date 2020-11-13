import React from 'react'
import './styles.scss'

const SearchMenu = () => (
   <div className="search-menu-container">
      <form action="" id="search-by-name">
         <legend>Search by name</legend>
         <label htmlFor="name-field"></label>
         <input
            type="text"
            name="name-field"
            id="name-field"
         />
         <button type="submit" className="btn btn-primary ml-2">Search</button>
         <hr />
         <legend>Search by letter</legend>
         <label htmlFor="name-field"></label>
         <button type="submit" className="btn-letter btn btn-primary m-1">A</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">B</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">C</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">D</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">E</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">F</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">G</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">H</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">I</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">J</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">K</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">L</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">M</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">N</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">O</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">P</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">Q</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">R</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">S</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">T</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">U</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">V</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">W</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">X</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">Y</button>
         <button type="submit" className="btn-letter btn btn-primary m-1">Z</button>
      </form>
   </div>
);

export default SearchMenu;