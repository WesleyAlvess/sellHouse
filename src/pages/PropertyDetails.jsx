import React from 'react';

// import data
import { housesData } from '../data'

// import use params
import { useParams } from 'react-router-dom';

// import link
import { Link } from 'react-router-dom'

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams()
  // get the house based on the id
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })

  return (
    <section>
      <div className="container mx-auto min-h-[800px]
      mb-14 ">
        <div className='flex flex-col lg:flex-row lg:items-center
        lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 rounded-full px-3 
            text-white'>{house.type}</div>
            <div className='bg-violet-500 rounded-full px-3 
            text-white'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>R$ {house.price}</div>
        </div>
        <div className='flex flex-col items-start 
        gap-8 lg:flex-row'>
          <div className='max-w-[768px] mt-2'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="imagem-house" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl'/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl'/>
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl'/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-violet-100 w-full
          mb-8 border border-gray-300 rounded-lg px-6 py-8 mt-2'>
          <div className='flex items-center gap-x-4 mb-6'> 
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt="" />
            </div>
            <div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='' className='text-violet-700
              text-sm'>Ver Lista
              </Link>
            </div>
          </div>
          {/* form */}
          <form className='flex flex-col gap-y-3'>
            <input className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full py-3 p-2 h-10 text-sm text-gray-400' type="text" placeholder='name*'/>
            <input className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full py-3 p-2 h-10 text-sm text-gray-400' type="text" placeholder='Email*'/>
            <input className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full py-3 p-2 h-10 text-sm text-gray-400' type="text" placeholder='phone*'/>
            <textarea className='border border-gray-300 outline-none focus:border-violet-700
            rounded w-full resize-none py-5 p-2 h-36 text-sm text-gray-400' placeholder='Message*'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 rounded text-white 
              px-2 py-3 w-full sm:text-sm transition text-[12px]'>Enviar menssagem</button>
              <button className='border border-violet-300 text-violet-700 hover:border-violet-500 rounded  
              px-2 py-3 w-full sm:text-sm transition text-[12px]'>ligar</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;
