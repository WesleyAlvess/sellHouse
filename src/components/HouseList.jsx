import { useContext } from 'react';

// Import context
import { HouseContext } from './HouseContext'

// Import components
import House from './House';

// Import links
import { Link } from 'react-router-dom'

// Import icons
import { ImSpinner2 } from 'react-icons/im'

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  // if loading is true
  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl lg:mt-48 mt-20' />)
  }

  if (houses.length < 1){
    return <div className='text-gray-400 lg:text-3xl sm:text-2xl text-lg lg:mt-48 mt-20 text-center'>Desculpe, nenhum imóvel encontrado!</div>
  }
  
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
