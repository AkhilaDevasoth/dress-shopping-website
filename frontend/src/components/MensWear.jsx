import { useState, useEffect } from 'react'
import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'
import { getProductsByCategory } from '../services/api'

function MensWear() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory('mens')
        setProducts(data)
      } catch (err) {
        setError('Failed to load products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please sign in to add items to cart.')
      return
    }
    addToCart(product)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading men's fashion...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          
          <div className="flex justify-center gap-12 text-center">

            <div>
              <div className="text-3xl font-bold"> 500+</div>
              <div className="text-sm opacity-90">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.7★</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div className="w-full text-center my-10">
  <h2 className="text-3xl font-bold">
    {search ? `Search Results for "${search}"` : "Men's Collection"}
  </h2>
</div>

            <span className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        console.log('❌ Image failed to load:', product.name);
                        e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available'
                      }}
                    />
                       <div className="absolute inset-0 bg-black/0 
                    group-hover:bg-black/20 
                    transition-all duration-300 
                    flex items-center justify-center">
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-white text-gray-900 
                   px-4 py-2 rounded-md 
                   font-medium text-sm
                   opacity-0 group-hover:opacity-100 
                   transform translate-y-3 
                   group-hover:translate-y-0 
                   transition-all duration-300"
      >
                        Quick Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
         <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="text-sm text-gray-600 ml-1">4.5</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    Add to Cart
                  </button>
                
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-12 text-gray-900">
            <br>
            </br>
            Why Shop Men's Fashion With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center flex flex-col items-center">
  <div className="w-16 h-16 bg-blue-100 rounded-full 
                  flex items-center justify-center 
                  mb-4">
    <span className="text-2xl leading-none">🎯</span>
  </div>
  <h3 className="text-l font-semibold mb-2">Premium Quality</h3>
  <p className="text-gray-600">Carefully selected fabrics and materials for lasting comfort and style.</p>
</div>

           <div className="text-center flex flex-col items-center">
  <div className="w-16 h-16 bg-green-100 rounded-full 
                  flex items-center justify-center 
                  mb-4">
    <span className="text-2xl leading-none">🚚</span>
  </div>

  <h3 className="text-l font-semibold mb-2">
    Free Shipping
  </h3>

  <p className="text-gray-600">
    Free delivery on all orders over $50. Fast and reliable shipping worldwide.
  </p>
</div>

<div className="text-center flex flex-col items-center">
  <div className="w-16 h-16 bg-purple-100 rounded-full 
                  flex items-center justify-center 
                  mb-4">
    <span className="text-2xl leading-none">↩️</span>
  </div>

  <h3 className="text-l font-semibold mb-2">
    Easy Returns
  </h3>

  <p className="text-gray-600">
    Hassle-free returns within 30 days of purchase.
  </p>
</div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default MensWear