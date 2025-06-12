import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { removeFromCartByIndex, clearCart } from '../store/cartSlice'
import { Button } from 'antd'
import { useState } from 'react'
import './CartPage.scss'
import './DustFade.scss' // содержит .dust-out и @keyframes dust

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.items)
  const [removingIndex, setRemovingIndex] = useState<number | null>(null)

  const handleRemove = (index: number) => {
    setRemovingIndex(index)
    setTimeout(() => {
      dispatch(removeFromCartByIndex(index))
      setRemovingIndex(null)
    }, 1000) // 1 секунда = длительность анимации
  }

  const handleClearAll = () => {
    dispatch(clearCart())
  }

  return (
    <div className="page-content">
      <div className="cart-header">
        <h1>Корзина</h1>
        {cart.length > 0 && (
          <Button danger type="link" onClick={handleClearAll}>
            Очистить всё
          </Button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        cart.map((lens, index) => (
          <div
            key={`${lens.id}-${index}`}
            className={removingIndex === index ? 'dust-out' : ''}
            style={{ marginBottom: '1rem' }}
          >
            <strong>{lens.brand}</strong> — SPH: {lens.sph}
            <div style={{ marginTop: '4px' }}>
              <Button type="text" danger onClick={() => handleRemove(index)}>
                Удалить
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default CartPage
