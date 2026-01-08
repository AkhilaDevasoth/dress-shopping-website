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
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      

      {/* Main header */}
      <br></br>
     <div className="container mx-auto px-8 py-4">
  <div className="flex items-center justify-between">

          {/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">

    <span className="text-white font-bold text-xl">OS</span>
  </div>
  <h1 className="text-2xl font-bold text-gray-900">
    Online Shopping
  </h1>
 
</Link>
<br></br>


          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-8">

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Categories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCategories && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-2">
                    <Link to="/mens" className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                      <span className="mr-3">👔</span>
                      Men's Fashion
                    </Link>
                    <Link to="/womens" className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                      <span className="mr-3">👗</span>
                      Women's Fashion
                    </Link>
                    <Link to="/kids" className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                      <span className="mr-3">🧸</span>
                      Kids Fashion
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 relative">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="font-medium">Cart</span>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {user.user_metadata?.first_name?.[0] || user.email?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">
                        {user.user_metadata?.first_name || 'User'}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={signOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-6">

                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
