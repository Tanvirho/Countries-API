import react, { useEffect, useState } from 'react'
// import data from '../assets/data'
import CountryList from './CountryList';
import CountryListShimmer from './CountryListShimmer';


const Country = ({ query }) => {

  const [CountryData, setCountryData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data)
      })

  }, [])

  const Filtering = CountryData.filter((card) => card.name.common.toLowerCase().includes(query) || card.region.toLowerCase().includes(query))

  return (
    <>
      <div className="countries-container">
        {!CountryData.length ? (<CountryListShimmer />) : (Filtering.map((card) => (
          <CountryList key={card.cca3} region={card.region} name={card.name.common} image={card.flags.svg} population={card.population} capital={card.capital?.[0]} data={card} />
        )))}
      </div>
    </>
  )
}

export default Country