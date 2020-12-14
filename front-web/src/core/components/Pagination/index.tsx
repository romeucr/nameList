import React from 'react'
import './styles.scss'

type Props = {
   totalPages: number,
   activePage: number,
   onChange: (item: number) => void
}

const Pagination = ({ totalPages, activePage, onChange }:Props) => {

   const generateList = (amount: number) => {
      return Array.from(Array(amount).keys())
   }

   const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive'
   const nextClass = (activePage +1) < totalPages ? 'page-active' : 'page-inactive'

   const items = generateList(totalPages)

   return (
      <div className="pagination-container">
         <span 
            className={`pagination-prev ${previousClass}`}
            onClick={() => onChange(activePage - 1)}
         >
               &lt; {/* //codigo para > */}
         </span>
         {items.map(item => (
            <div 
               key={item}
               className={`pagination-item ${item === activePage ? 'active' : ''}`}
               onClick={() => onChange(item)}
            >  
               {item + 1}
            </div>
         ))}
         <span 
            className={`pagination-prev ${nextClass}`}
            onClick={() => onChange(activePage + 1)}
         >
            &gt; {/* //codigo para < */}
         </span>
      </div>
   )
}

export default Pagination