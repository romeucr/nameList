import React, { useEffect, useState } from 'react'
import ButtonIcon from '../../core/components/ButtonIcon'
import { NameData, NameResponse } from '../../core/types/Name'
import { makeRequest } from '../../core/utils/request'
import './styles.scss'
import { useForm } from 'react-hook-form'
import { Pagination } from '@material-ui/lab';

const Search = () => {

   const [nameResponse, setNameResponse] = useState<NameResponse>()
   const [activePage, setActivePage] = useState(0)
   const [searchName, setSearchName] = useState('')
   const { register, handleSubmit } = useForm<NameData>();

   useEffect(() => {
      const params = {
         page: activePage,
         size: 50
      }

      makeRequest({ url: `/names/search?name=${searchName}`, params })
         .then(response => setNameResponse(response.data))

   }, [activePage, searchName])

   const onSubmit = (data: NameData) => {
      setSearchName(data.name)
      setActivePage(0)
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
                     name="name"
                     ref={register}
                  />
                  <ButtonIcon text="Search" />
               </fieldset>
            </form>
         </div>
         <div className="search-result">
            <h3 className="search-result-title">Search results</h3>
            <table className="table table-striped table-hover table-sm" cellPadding="0" cellSpacing="0">
               <thead className="thead-dark">
                  <tr>
                     <th>NAME</th>
                     <th>EQUIVALENT NAME</th>
                     <th>GENDER</th>
                     <th>ORIGIN</th>
                  </tr>
               </thead>
               <tbody>
                  {nameResponse?.content.map((nameData: any) => (
                     <tr key={nameData.id}>
                        <td>{nameData.name}</td>
                        <td>{nameData.meaning}</td>
                        <td>{nameData.gender}</td>
                        <td>{nameData.origin.name}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
            {/* MY PAGINATION COMPONENT            
            {nameResponse &&
               <Pagination
                  totalPages={nameResponse.totalPages}
                  activePage={activePage}
                  onChange={page => setActivePage(page)}
               />
            } */}
            {/* MATERIAL-UI'S PAGINATION COMPONENT */}
            {nameResponse &&
               <span className="pagination">
                  {/* Using material-ui pagination instead mine because mine does not handle well lots of pages */}
                  <Pagination
                     count={nameResponse.totalPages}
                     onChange={(_event, val) => setActivePage(val - 1)}
                     page={activePage + 1}
                     shape="rounded"
                     variant="outlined"
                     color="primary"
                  />
               </span>
            }
         </div>
      </div>
   )
}

export default Search