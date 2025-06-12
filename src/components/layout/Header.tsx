import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import AnimatedDropdown from '../menu/AnimatedDropdown'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store' 

import './Header.scss'

const { Header } = Layout

const AppHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const hideTimer = useRef<NodeJS.Timeout | null>(null)

  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  const handleMouseEnter = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => {
      setShowDropdown(false)
    }, 250)
  }

  return (
    <Header className="app-header">
<div className="app-header__container">
  {/* Левый блок */}
  <div className="app-header__left">
    <Link to="/" className="app-header__logo">Линзы</Link>
    <div
      className="app-header__menu-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src="/contactLens.svg" alt="Меню" className="app-header__icon" />
      <AnimatedDropdown visible={showDropdown} />
    </div>
  </div>

  {/* Центр */}
  <div className="app-header__center">
    <Link to="/select" className="app-header__select-btn">Подбор линз</Link>
    <Link to="/delivery" className="app-header__select-btn">Доставка и оплата</Link>
  </div>

  {/* Правый блок */}
  <div className="app-header__right">
    <Link to="/cart" className="app-header__cart">
      <img src="/ShoppingCart.svg" alt="Корзина" className="app-header__cart-icon" />
      <span className="app-header__cart-badge">
        {cartCount}
      </span>
    </Link>
  </div>
</div>

    </Header>
  )
}

export default AppHeader
