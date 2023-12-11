import React from 'react'
import "./Search.css"

export const Search = ({result}) => {
  return (
    <div 
        className="search-result" 
        onClick={(e) => alert(`you clicked on ${result.name}`)} 
    >
            {result.name}
    </div>
  )
}
