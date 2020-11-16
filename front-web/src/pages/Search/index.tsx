import React from 'react'
import ButtonIcon from '../../core/components/ButtonIcon'
import './styles.scss'

const Search = () => (
   <div className="search-container">
      <div className="search-options">
         <form action="">
            <fieldset>
               <legend>Search by name:</legend>
               <label htmlFor="name-input">Name:</label><br />
               <input type="text" name="name-input" className="name-input" />
               <ButtonIcon text="Search" />
            </fieldset>
            <fieldset>
               <legend>Search by first letter:</legend>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-a" />
                  <label htmlFor="radio-a">&nbsp;A</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-b" />
                  <label htmlFor="radio-b">&nbsp;B</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-c" />
                  <label htmlFor="radio-c">&nbsp;C</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-d" />
                  <label htmlFor="radio-d">&nbsp;D</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-e" />
                  <label htmlFor="radio-e">&nbsp;E</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-f" />
                  <label htmlFor="radio-f">&nbsp;F</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-g" />
                  <label htmlFor="radio-g">&nbsp;G</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-h" />
                  <label htmlFor="radio-h">&nbsp;H</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-i" />
                  <label htmlFor="radio-i">&nbsp;I</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-j" />
                  <label htmlFor="radio-J">&nbsp;J</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-k" />
                  <label htmlFor="radio-k">&nbsp;K</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-l" />
                  <label htmlFor="radio-l">&nbsp;L</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-m" />
                  <label htmlFor="radio-m">&nbsp;M</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-n" />
                  <label htmlFor="radio-n">&nbsp;N</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-o" />
                  <label htmlFor="radio-o">&nbsp;O</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-p" />
                  <label htmlFor="radio-p">&nbsp;P</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-q" />
                  <label htmlFor="radio-q">&nbsp;Q</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-r" />
                  <label htmlFor="radio-r">&nbsp;R</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-s" />
                  <label htmlFor="radio-s">&nbsp;S</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-t" />
                  <label htmlFor="radio-t">&nbsp;T</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-u" />
                  <label htmlFor="radio-u">&nbsp;U</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-v" />
                  <label htmlFor="radio-v">&nbsp;V</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-w" />
                  <label htmlFor="radio-w">&nbsp;W</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-x" />
                  <label htmlFor="radio-x">&nbsp;X</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-y" />
                  <label htmlFor="radio-y">&nbsp;Y</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-z" />
                  <label htmlFor="radio-z">&nbsp;Z</label>
               </div>
               <div className="radio-btn">
                  <input type="radio" name="letter" id="radio-z" />
                  <label htmlFor="radio-z">&nbsp;Show all names</label>
               </div>
            </fieldset>
         </form>
      </div>
      <div className="search-result">
         <h3>Search results</h3>
         <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
               <tr>
                  <th>NAME</th>
                  <th>MEANING</th>
                  <th>GENDER</th>
                  <th>ORIGIN</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Ainhoa</td>
                  <td>goddess Ainhoa</td>
                  <td>female</td>
                  <td>Basque Country</td>
               </tr>
               <tr>
                  <td>Ainhoa</td>
                  <td>goddess Ainhoa</td>
                  <td>female</td>
                  <td>Basque Country</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
)

export default Search