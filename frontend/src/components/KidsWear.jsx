import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'

function KidsWear() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()

  const kidsProducts = [
    { id: 19, name: 'Cute T-Shirt', price: '$19.99', image: 'https://m.media-amazon.com/images/I/51XifJWOOqL._AC_UY350_.jpg' },
    { id: 20, name: 'Playful Shorts', price: '$24.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq423IXIcHL0WiGBSujUxaSI2R40w3NPgHQ&s' },
    { id: 21, name: 'Colorful Dress', price: '$29.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBxbrVbJF9Gtm8eo-R3OnTZbmYWFGOFRkVg&s' },
    { id: 22, name: 'Comfy Hoodie', price: '$39.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGX0YWwoyETw7bFmTJoOgjdfQOslG74GiLuA&s' },
    { id: 23, name: 'Fun Sneakers', price: '$49.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Iu9H-fLdUEx8pRkaNX0r8Jcb4dVLViLPFw&s' },
    { id: 24, name: 'Adorable Pajamas', price: '$34.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqskYNdvwLQ2EEfAhNU7b2o7NmmWeWN5ZDQ&s' },
  ];

  const filteredProducts = kidsProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please login to add items to cart.')
      return
    }
    addToCart(product)
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Kids Wear</h2>
      <p className="mb-8 text-center">Find adorable and comfortable clothing for kids.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-pink-600 mb-4">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KidsWear