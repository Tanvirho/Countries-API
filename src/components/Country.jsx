import react from 'react'
import data from '../assets/data'
import CountryList from './CountryList';

const Country = ({query}) => {

  const CountryData = data;

  const Filtering = CountryData.filter((card) => card.name.common.toLowerCase().includes(query))

  return (
    <>
      <div className="countries-container">
        {Filtering.map((card, i) => (
          <CountryList key={i} region={card.region} name={card.name.common} image={card.flags.svg} population={card.population} capital={card.capital?.[0]} />
        ))}
      </div>
    </>
  )
}

export default Country