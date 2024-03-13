// Import imgs
import Image from '../assets/img/house-banner.png'

// import componentes
import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 '>
      <div className='flex flex-col sm:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col itens-center lg:items-start
        text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-2xl lg:text-[31px] font-semibold leading-none mb-6'>
            ENCONTRAREMOS UM <span className='text-violet-700'>LAR</span> PRA VOCÊ CHAMAR DE SEU! 
          </h1>
          <p className='max-w-[680px] mb-8 text-center'>Vamos trabalhar juntos para realizar seu sonho imobiliário.</p>
        </div>
        {/* Imagem */}
        <div className='hidden flex-1 md:flex justify-end items-end'>
          <img src={Image} alt="Imagem Banner" />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;

