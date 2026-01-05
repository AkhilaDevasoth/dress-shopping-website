import { useCart } from '../components/CartContext'
import { useAuth } from '../components/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) {
    return <div>Please login to view your cart.</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg font-bold text-pink-600">{item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-2xl font-bold">Total: ${getTotal()}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded mt-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart