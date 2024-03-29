// Import Rotes e Rote
import { Routes, Route } from 'react-router-dom'

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'

// Import pages
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'

const App = () => {
  return (
    <div className='max-w-[1440px] bg-white mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
