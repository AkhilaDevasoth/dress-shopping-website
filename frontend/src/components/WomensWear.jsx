import { useCart } from './CartContext'
import { useAuth } from './AuthContext'
import { useSearch } from './SearchContext'

function WomensWear() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const { search } = useSearch()

  const womensProducts = [
    { id: 1, name: 'Elegant Red Dress', price: '$89.99', image: 'https://media.istockphoto.com/id/1675467977/photo/fashion-woman-in-red-flying-dress-with-afro-hairstyle-dark-skinned-model-in-silk-long-gown.jpg?s=612x612&w=0&k=20&c=TCOnGP9HKGxIkUJmG9rHiPAOW3Sh2Ij-oculowEr_1U=' },
    { id: 2, name: 'Casual Blue Sundress', price: '$59.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87oj52oLwLhgJ0CdLlKOS1B2N3jdnfCK1dg&s' },
    { id: 3, name: 'Black Evening Gown', price: '$129.99', image: 'https://images.jdmagicbox.com/quickquotes/images_main/evening-gown-for-women-0hd08rgr.jpg' },
    { id: 4, name: 'Floral Maxi Dress', price: '$79.99', image: 'https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/2025/MAY/12/KJ5SZaN8_641049e1919045a3a3f755654fcf3450.jpg' },
    { id: 5, name: 'White Wedding Dress', price: '$199.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXv_kKV9zpBVfcoRw6hOe8723X9LDIhEqh6Q&s' },
    { id: 6, name: 'Striped Summer Dress', price: '$49.99', image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JULY/31/CT6ejVGT_fc99de941e234b6f90f3d728d57d9e44.jpg' },
    { id: 7, name: 'Vintage Polka Dot Dress', price: '$69.99', image: 'https://m.media-amazon.com/images/I/61aR7xiVdkL.jpg' },
    { id: 8, name: 'Chic Little Black Dress', price: '$99.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXJIIbA01tpQtSL4Ew_HXKjZxrX7ev9WgLA&s' },
    { id: 9, name: 'Bohemian Flowy Dress', price: '$79.99', image: 'https://i.etsystatic.com/11827237/r/il/144737/4016428092/il_570xN.4016428092_7v7d.jpg' },
    { id: 10, name: 'Classic A-Line Dress', price: '$89.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYmI6Cl7sKuSZEVcJVaTEBEbfTTpP0mTa7w&s' },
    { id: 11, name: 'Sporty Athletic Dress', price: '$54.99', image: 'https://i.pinimg.com/236x/21/b3/d7/21b3d717f6f4b86edaa1f23b92bc31ac.jpg' },
    { id: 12, name: 'Luxury Silk Dress', price: '$149.99', image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/9/4k4IDcIm_65f9bbb18e1b498d92c08a6197385609.jpg' },
  ];

  const filteredProducts = womensProducts.filter(product =>
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
      <h2 className="text-3xl font-bold mb-4 text-center">Women's Wear</h2>
      <p className="mb-8 text-center">Discover the latest fashion trends in women's clothing.</p>
      
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

export default WomensWear