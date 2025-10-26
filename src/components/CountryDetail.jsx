import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { UseTheme } from '../Hooks/UseTheme'
import { CountryDetailShimmer } from './CountryDetailShimmer'
// import { UseWindowSize } from '../Hooks/UseWindowSize'


export const CountryDetail = () => {

    // const windowSize = UseWindowSize()
    const { state } = useLocation()

    const [isDark] = UseTheme()

    const [notFound, setNotFound] = useState(false)

    const params = useParams()
    const countryName = params.country

    const [CountryData, setCountryData] = useState(null)

    function updateCountryData(data) {

        setCountryData({
            name: data.name.common || data.name,
            nativeName: Object.values(data.name.nativeName || {})[0].common,
            population: data.population.toLocaleString(),
            region: data.region,
            subregion: data.subregion,
            flags: data.flags.svg,
            alt: data.flags.alt,
            capital: data.capital.join(', '),
            tld: data.tld.join(', '),
            languages: Object.values(data.languages || {}).join(', '),
            currencies: Object.values(Object.values(data.currencies || {})
                .map((currency) => currency.name)
                .join(', ')),
            borders: []
        })

        if (!data.borders) {
            data.borders = []
        }

        Promise.all(data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountries]) => borderCountries.name.common)
        })).then((borders) => {
            setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders })))
        })

    }

    useEffect(() => {

        if (state) {
            updateCountryData(state)
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?status=true/`)
            .then((res) => res.json())
            .then(([data]) => {

                updateCountryData(data)

            }).catch((err) => {
                console.log(err)
                setNotFound(true)
            })

    }, [countryName])

    if (notFound) {
        return <NotFound />
    }



    return (
        <>
            <main className={` ${isDark ? 'dark' : ' '}`}>
                {/* <h1 style={{ textAlign: 'center' }}>{windowSize.width} x {windowSize.height}</h1> */}
                <div className="country-details-container">
                    <span onClick={() => history.back()} className="back-button" >
                        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                    </span>
                    {CountryData === null ? (<CountryDetailShimmer />) :
                    (<div className="country-details">
                        <img src={CountryData.flags} alt={CountryData.alt} />
                        <div className="details-text-container">
                            <h1>{CountryData.name}</h1>
                            <div className="details-text">
                                <p><b>Native Name: </b><span className="native-name">{CountryData.nativeName}</span></p>
                                <p><b>Population: </b><span className="population">{CountryData.population}</span></p>
                                <p><b>Region: </b><span className="region">{CountryData.region}</span></p>
                                <p><b>Sub Region: </b><span className="sub-region">{CountryData.subregion}</span></p>
                                <p><b>Capital: </b><span className="capital">{CountryData.capital}</span></p>
                                <p>
                                    <b>Top Level Domain: </b><span className="top-level-domain">{CountryData.tld}</span>
                                </p>
                                <p><b>Currencies: </b><span className="currencies">{CountryData.currencies}</span></p>
                                <p><b>Languages: </b><span className="languages">{CountryData.languages}</span></p>
                            </div>
                            {CountryData.borders.length !== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
                                {
                                    CountryData.borders.map((border, i) => (
                                        <Link key={i} to={`/${border}`}>{border}</Link>
                                    ))
                                }
                            </div>}
                        </div>
                    </div>)}
                </div>
            </main>
        </>)

}
