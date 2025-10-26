import React from 'react'

function FilterRegion({setQuery}) {
    return (
        <select className="filter-by-region" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
            <option hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default FilterRegion