import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { removeFromCartByIndex, clearCart } from '../store/cartSlice'
import { Button, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CartPage.scss'
import './DustFade.scss'

const CartPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state: RootState) => state.cart.items)
  const [removingIndex, setRemovingIndex] = useState<number | null>(null)
  const [clearingAll, setClearingAll] = useState(false)
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])

  const handleRemove = (index: number) => {
    setRemovingIndex(index)
    setTimeout(() => {
      dispatch(removeFromCartByIndex(index))
      setRemovingIndex(null)
    }, 1000)
  }

  const handleClearAll = () => {
    setClearingAll(true)
    setTimeout(() => {
      dispatch(clearCart())
      setClearingAll(false)
      setSelectedIndexes([])
    }, 1000)
  }

  const handleToggle = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  const handleSelectAll = () => {
    if (selectedIndexes.length === cart.length) {
      setSelectedIndexes([])
    } else {
      setSelectedIndexes(cart.map((_, i) => i))
    }
  }

  const handleProceedToCheckout = () => {
    const selectedItems = selectedIndexes.map((i) => cart[i])
    navigate('/checkout', { state: { selectedItems, selectedIndexes } })
  }

return (
  <div className="page-content">
    <div className="cart-header">
      <h1>Корзина</h1>
      <div className="cart-header__actions">
        {cart.length > 0 && (
          <>
            <Button danger type="link" onClick={handleClearAll}>
              Очистить всё
            </Button>
            <Button
              type="default"
              onClick={handleProceedToCheckout}
              disabled={selectedIndexes.length === 0}
            >
              Оформить заказ
            </Button>
          </>
        )}
      </div>
    </div>

    {cart.length > 0 && (
      <div className="cart-select-all">
        <Button onClick={handleSelectAll}>
          {selectedIndexes.length === cart.length
            ? 'Снять выделение'
            : 'Выбрать всё'}
        </Button>
      </div>
    )}

    {cart.length === 0 ? (
      <p>Корзина пуста.</p>
    ) : (
      cart.map((lens, index) => (
        <div
          key={`${lens.id}-${index}`}
          className={`cart-item ${
            removingIndex === index || clearingAll ? 'dust-out' : ''
          }`}
          style={{ marginBottom: '1rem' }}
        >
          <Checkbox
            checked={selectedIndexes.includes(index)}
            onChange={() => handleToggle(index)}
            style={{ marginRight: '0.5rem' }}
          />
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
