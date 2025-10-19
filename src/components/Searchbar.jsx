import React from 'react'

function Searchbar({setQuery}) {
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onInput={(e)=> setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
        </div>
    )
}

export default Searchbar