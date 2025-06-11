import { useEffect, useState } from 'react'
import type { Lens } from '../components/types'

const CartPage = () => {
  const [cart, setCart] = useState<Lens[]>([])

  useEffect(() => {
    const data = localStorage.getItem('cart')
    if (data) {
      setCart(JSON.parse(data))
    }
  }, [])

  return (
    <div className="page-content">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        cart.map((lens, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{lens.brand}</strong> — SPH: {lens.sph}
          </div>
        ))
      )}
    </div>
  )
}

export default CartPage
