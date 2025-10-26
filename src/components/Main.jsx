import { useState } from 'react'
import Searchbar from './Searchbar'
import FilterRegion from './FilterRegion'
import Country from './Country'
import { UseTheme } from '../Hooks/UseTheme'
// import { UseWindowSize } from '../Hooks/UseWindowSize'


export const Main = () => {

  const [query, setQuery] = useState('')
  const [isDark] = UseTheme()
  // const windowSize = UseWindowSize()
  
  return (
    <main className={`${isDark? 'dark' : ' '}`}>
      <div className="search-filter-container">
        <Searchbar  />
        <FilterRegion setQuery={setQuery} />
      </div>
      {/* <h1 style={{textAlign: 'center'}}>{windowSize} x {windowHeight}</h1> */}
      {/* <h1 style={{textAlign: 'center'}}>{windowSize.width} x {windowSize.height}</h1> */}
      <Country query={query} />
    </main>
  )
}
