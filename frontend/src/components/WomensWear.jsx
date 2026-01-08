import { useState, useEffect } from 'react'
import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'
import { getProductsByCategory } from '../services/api'

function WomensWear() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory('womens')
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
      alert('Please login to add items to cart.')
      return
    }
    addToCart(product)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading women's fashion...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">
            <p className="text-xl font-semibold">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
       {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-300 to--600 text-white py-16">
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">Women Collection</h2><br>
          </br>
          
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      console.log('❌ Image failed to load:', product.name);
                      e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available'
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
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
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
         {/* Features Section */}
    <div className="container mx-auto px-4 py-16">  <br></br>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

    {/* Card 1 */}
    <div className="text-center flex flex-col items-center">
      <div className="bg-pink-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
      <p className="text-gray-600 text-center">
        Every piece is carefully inspected to ensure the highest quality standards.
      </p>
    </div>

    {/* Card 2 */}
    <div className="text-center flex flex-col items-center">
      <div className="bg-purple-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
      <p className="text-gray-600 text-center">
        Quick and reliable shipping to get your favorite items to you faster.
      </p>
    </div>

    {/* Card 3 */}
    <div className="text-center flex flex-col items-center">
      <div className="bg-pink-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
      <p className="text-gray-600 text-center">
        Join thousands of satisfied customers who trust our fashion expertise.
      </p>
    </div>

  </div>
      </div>
      
    </div>
    
  )
}

export default WomensWear