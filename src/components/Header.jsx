// Import Link
import { Link } from "react-router-dom"

// Import icon
import { FaRegUserCircle } from "react-icons/fa"

// Import Logo
import logo from "../assets/img/logo.svg"

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width='100px' />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-1 text-[15px]">
          <Link to="/">Olá, admin</Link>
          <FaRegUserCircle />
        </div>
      </div>
    </header>
  )
};

export default Header;
