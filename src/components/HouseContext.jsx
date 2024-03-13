import { createContext, useEffect, useState } from 'react';

// import data
import { housesData } from '../data'

// create context
export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState("Property type (any)")
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState("Price renge (any)")
  const [loading, setLoading] = useState(false)

  // Return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })

    // Remove duplicates
    const uniqueCountries = ['location (any)', ... new Set(allCountries)]
    setCountries(uniqueCountries)
  }, [])

  // Return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    })

    // Remove duplicates
    const uniqueProperties = ['location (any)', ... new Set(allProperties)]
    setProperties(uniqueProperties)
  }, [])

  const handleClick = () => {
    // set loading
    setLoading(true)

    // create the function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }
    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0].replace(/\./g, ''))

    // get second value of price which is the maximun price e parse it to number
    const maxPrice = parseInt(price.split(' ')[2].replace(/\./g, ''))

    const newHouses = housesData.filter((house) => {
      const housePrice = (parseInt(house.price))

      // If all values are selected
      if (house.country === country && house.type === property && housePrice >=
        minPrice && housePrice <= maxPrice) {
        return house
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country
      }

      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property
      }

      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house
        }
      }

      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property
      }

      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country
        }
      }

      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property
        }
      }

    })

    setTimeout(() => {
      newHouses.length < 1 ? setHouses([]) : setHouses(newHouses)
      setLoading(false)
    },1000)
  }

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>{children}</HouseContext.Provider>
  )
};

export default HouseContextProvider;