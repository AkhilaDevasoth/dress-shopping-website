import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'

function MensWear() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()

  const mensProducts = [
  {
    id: 13,
    name: 'Classic Suit',
    price: '$149.99',
    image: 'https://manyavar.scene7.com/is/image/manyavar/TWS0094_306-Dark+Blue_401.24924_16-09-2024-22-01:375x530?&dpr=on,2'
  },
  {
    id: 14,
    name: 'Casual Shirt',
    price: '$39.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_gJDPouVOhRI_5oGz_H0dngKUSoseIQb-A&s'
  },
  {
    id: 15,
    name: 'Jeans',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 16,
    name: 'Leather Jacket',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 17,
    name: 'Sweater',
    price: '$79.99',
    image: 'https://m.media-amazon.com/images/I/71TmRAyNnrL._AC_UY1100_.jpg'
  },
  {
    id: 18,
    name: 'Trousers',
    price: '$49.99',
    image: 'https://assets.ajio.com/medias/sys_master/root/20241109/veEh/672e6853f9b8ef490b0ff364/-473Wx593H-700595679-brown-MODEL.jpg'
  }
];

  const filteredProducts = mensProducts.filter(product =>
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
      <h2 className="text-3xl font-bold mb-4 text-center">Men's Wear</h2>
      <p className="mb-8 text-center">Explore our collection of men's fashion.</p>
      
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

export default MensWear