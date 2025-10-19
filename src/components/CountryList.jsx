import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryList(props) {
  return (
    <>
      <Link to={`/country-detail?name=${props.name}`} className='country-card'>
        <img src={props.image} alt={props.name + " Flag"} />
        <div className="card-text">
          <h3 className='card-title'>{props.name}</h3>
          <p>
            <b>population:</b> {props.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {props.region}
          </p>
          <p>
            <b>Capital:</b> {props.capital}
          </p>
        </div>
      </Link>
    </>
  )
}
