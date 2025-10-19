import { useState } from 'react'
import Searchbar from './Searchbar'
import FilterRegion from './FilterRegion'
import Country from './Country'

export const Main = () => {

  const [query, setQuery] = useState('')

  return (
    <main>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <FilterRegion />
      </div>
      <Country query={query} />
    </main>
  )
}
