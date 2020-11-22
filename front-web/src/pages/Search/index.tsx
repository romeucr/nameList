import React, { useEffect, useState } from 'react'
import ButtonIcon from '../../core/components/ButtonIcon'
import { NameResponse } from '../../core/types/Name'
import { makeRequest } from '../../core/utils/request'
import { useForm } from 'react-hook-form';
import './styles.scss'
import Pagination from '../../core/components/Pagination';


const Search = () => {

   type FormData = {
      name: string
   }

   const [nameResponse, setNameResponse] = useState<NameResponse>()
   const [activePage, setActivePage] = useState(0)

   const { register, handleSubmit } = useForm<FormData>()

   useEffect(() => {
      const params = {
         page: activePage,
         linesPerPage: 12
      }
      makeRequest({ url: '/names', params })
         .then(response => setNameResponse(response.data))
   }, [activePage])
   
   const onSubmit = (data: FormData) => {
      console.log(data)
   }

   return (
      <div className="search-container">
         <div className="search-options">
            <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset>
                  <legend>Search name:</legend>
                  <label htmlFor="name-input">Name:</label><br />
                  <input
                     type="text"
                     className="name-input"
                     name="name-input"
                     required
                     ref={register}
                  />
                  <ButtonIcon text="Search" />
               </fieldset>
               {/*                <fieldset>
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
                     <input type="radio" name="letter" id="radio-all" />
                     <label htmlFor="radio-z">&nbsp;Show all names</label>
                  </div>
               </fieldset> */}
            </form>
         </div>
         <div className="search-result">
            <h3 className="search-result-title">Search results</h3>
            <table className="table table-striped table-hover table-sm" cellPadding="0" cellSpacing="0">
               <thead className="thead-dark">
                  <tr>
                     <th>NAME</th>
                     <th>MEANING</th>
                     <th>GENDER</th>
                     <th>ORIGIN</th>
                  </tr>
               </thead>
               <tbody>
                  {nameResponse?.content.map(nameData => (
                     <tr key={nameData.id}>
                        <td>{nameData.name}</td>
                        <td>{nameData.meaning}</td>
                        <td>{nameData.gender}</td>
                        <td>{nameData.origin.name}</td>
                         
                     </tr>
                  ))}
               </tbody>
            </table>
            {nameResponse && 
               <Pagination 
                  totalPages={nameResponse.totalPages}
                  activePage={activePage}
                  onChange={page => setActivePage(page)}
               />
            }
         </div>

      </div>
   )

}

export default Search