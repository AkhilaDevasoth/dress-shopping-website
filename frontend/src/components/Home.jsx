import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'

function Home() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()

  const dresses = [
  { id: 1, name: 'Ruby Charm Party Dress', price: '$89.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZVtPNNwa7ZBMSQimvFkjYp3HFY038GzAGQ&s' },
  { id: 2, name: 'Sky Blue Casual Day Dress', price: '$59.99', image: 'https://m.media-amazon.com/images/I/618Nc8GHqZL._AC_UY1100_.jpg' },
  { id: 3, name: 'Midnight Black Evening Gown', price: '$129.99', image: 'https://manyavar.scene7.com/is/image/manyavar/CPSH353DV-310_30-05-2024-13-20:650x900?&dpr=on,2' },
  { id: 4, name: 'Blossom Floral Maxi Dress', price: '$79.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxWDTWbmWRjGEvEKi4qs7D7g5MgZkJcAnxg&s' },
  { id: 5, name: 'Ivory Bridal Elegance Gown', price: '$199.99', image: 'https://i.pinimg.com/736x/78/f7/72/78f7722301631f66967706a8913d5313.jpg' },
  { id: 6, name: 'Summer Stripe Breeze Dress', price: '$49.99', image: 'https://cdn.mos.cms.futurecdn.net/MQEoifyuSXG6hcKLjtGybi.jpg' },
  { id: 7, name: 'Retro Polka Grace Dress', price: '$69.99', image: 'https://m.media-amazon.com/images/I/61gAitF3b4L._AC_UY1100_.jpg' },
  { id: 8, name: 'Sarees', price: '$99.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nl20XONKjE-ZdZbYxLAPyNbnh4Au1LP2lg&s' },
  { id: 9, name: 'Kanjivaram Kanchipuram', price: '$79.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6betVFPV892T583sIFBsNv0Ztyil-eia0MA&s' },
  { id: 10, name: 'Traditional Dress', price: '$89.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN0LL-1mldcNoxH4b6HsH7YoPqCKNCIueHg&s' },
  { id: 11, name: 'Shirts for Women', price: '$54.99', image: 'https://imagescdn.allensolly.com/img/app/product/3/39909619-18323325.jpg?auto=format&w=390' },
  { id: 12, name: 'Pure Silk Luxe Dress', price: '$149.99', image: 'https://img.faballey.com/images/Product/XLH01111Z/d3.jpg' },

  // ⭐ New Products Added
  { id: 13, name: 'Kids Casual Dress', price: '$94.99', image: 'https://www.littlecheer.com/cdn/shop/products/littlecheer-07-may-220820_7fc6588d-824e-4aa7-8fd2-567551315a3a_600x.jpg?v=1677001437' },
  { id: 14, name: 'Kids Birthday Dress', price: '$74.99', image: 'https://m.media-amazon.com/images/I/71OPp34Xv4L._AC_UY1100_.jpg' },
  { id: 15, name: 'Kids Party Gown', price: '$159.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeOOPSeSv1laGwoQUtzVByKqvqV-4V4SXig&s' },
  { id: 16, name: 'Hoodies', price: '$64.99', image: 'https://m.media-amazon.com/images/I/61OSK3YjfTL._AC_UY1100_.jpg' },
  { id: 17, name: 'Shirts for Men', price: '$139.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ciKBExwL9x7JsdH0HWQ_PDCIsbvcudLtBg&s' },
  { id: 18, name: 'Minimalist Linen Day Dress', price: '$69.99', image: 'https://visibleartshop.com/cdn/shop/products/DSC_4850.jpg?v=1742897230&width=1445' }
  ];

  const filteredDresses = dresses.filter(dress =>
    dress.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = (dress) => {
    if (!user) {
      alert('Please login to add items to cart.')
      return
    }
    addToCart(dress)
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to online Shopping</h2>
      <p className="mb-8 text-center">Discover the latest fashion trends in dresses. Shop now!</p>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDresses.map(dress => (
          <div key={dress.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={dress.image} alt={dress.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{dress.name}</h3>
            <p className="text-lg font-bold text-pink-600 mb-4">{dress.price}</p>
            <button
              onClick={() => handleAddToCart(dress)}
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

export default Home
