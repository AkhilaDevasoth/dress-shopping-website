import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'
import { getProducts } from '../services/api'

function Home() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('🔄 Fetching products from API...')
        const data = await getProducts()
        console.log('✅ Products fetched:', data.length, 'products')
        setProducts(data)
      } catch (err) {
        console.error('❌ Error fetching products:', err)
        setError('Failed to load products')
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
          <p className="mt-4 text-gray-600">Loading products...</p>
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
<section className="mt-10 mx-6 bg-gradient-to-r from-blue-300 to-purple-600 
                    text-white py-20 rounded-xl">
  
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-2xl font-bold mb-4">
      Welcome to Online Shopping
    </h1>

   <p className="text-l mb-8 mx-auto text-center whitespace-nowrap">
  Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, and more with fast, free shipping.
</p>
  </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 gap-2"></div>
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Shop by Category
            
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="group cursor-pointer">
              
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-xl font-bold mb-2">Men's Fashion</h3>
                <p className="text-blue-100">Stylish clothing for every occasion</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-8 text-white text-center transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-xl font-bold mb-2">Women's Fashion</h3>
                <p className="text-pink-100">Elegant dresses and accessories</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-8 text-white text-center transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="text-4xl mb-4">🧸</div>
                <h3 className="text-xl font-bold mb-2">Kids Fashion</h3>
                <p className="text-green-100">Adorable outfits for children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
    <section className="pt-20">
  <div className="container mx-auto px-4">
    
    <div className="flex flex-col items-center text-center mb-12 gap-2">
      <h2 className="text-3xl font-bold text-gray-900 ">
        Featured Products
      </h2>
       <div className="flex flex-col items-center text-center mb-12 gap-"></div>
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
                   <div className="relative overflow-hidden rounded-lg">
    <img
      src={product.image_url}
      alt={product.name}
      className="w-full h-50 object-cover 
                 group-hover:scale-100 
                 transition-transform duration-300"
      onError={(e) => {
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
        Quick Add
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">
                          ${product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                        </svg>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div><br></br>
      </section>
      {/* Features Section */}
      <section className="bg-grey py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 ">
            
            Why Online Shopping Fashion With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center flex flex-col items-center">
  <div className="w-16 h-16 bg-blue-100 rounded-full 
                  flex items-center justify-center 
                  mb-4 ">
    <span className="text-3xl leading-none">🎯</span>
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

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-l mb-8 mx-auto text-center whitespace-nowrap">
            Subscribe to our newsletter for exclusive deals and new product launches
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 w-50 h-10 rounded-full flex items-center justify-center ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
    </div>
    
  )
  
}



export default Home
