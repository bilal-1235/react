import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-emerald-600 text-white">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link to="/">Logo</Link>
      </div>

      {/* Menu Links */}
      <nav className="flex gap-8 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/products" className="hover:underline">Products</Link>
      </nav>
    </header>
  )
}

export default Header
