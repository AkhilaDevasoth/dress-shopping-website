import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { useCart } from './CartContext'
import { useSearch } from './SearchContext'
import { useState } from 'react'

function Header() {
  const { user, signOut } = useAuth()
  const { cart } = useCart()
  const { search, setSearch } = useSearch()
  const [showMenu, setShowMenu] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-pink-200 text-black p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">online Shopping</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search dresses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded border"
          />
          <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="hover:underline">Home</Link></li>              <li className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="hover:underline"
                >
                  Categories ▼
                </button>
                {showCategories && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <Link to="/mens" className="block px-4 py-2 text-sm hover:bg-gray-100">Men's Wear</Link>
                      <Link to="/womens" className="block px-4 py-2 text-sm hover:bg-gray-100">Women's Wear</Link>
                      <Link to="/kids" className="block px-4 py-2 text-sm hover:bg-gray-100">Kids Wear</Link>
                    </div>
                  </div>
                )}
              </li>            {user ? (
              <>
                <li><Link to="/cart" className="hover:underline">Cart ({cartCount})</Link></li>
                <li className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center hover:bg-pink-600 p-2 rounded"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm">{user.user_metadata?.first_name || user.email}</div>
                        <button
                          onClick={signOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:underline">Login</Link></li>
                <li><Link to="/signup" className="hover:underline">Create Account</Link></li>
              </>
            )}
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
