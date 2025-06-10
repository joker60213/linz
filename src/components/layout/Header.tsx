import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import AnimatedDropdown from '../menu/AnimatedDropdown'
import './Header.scss'

const { Header } = Layout

const AppHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const hideTimer = useRef<NodeJS.Timeout | null>(null)

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
    }, 250) // ← задержка перед скрытием
  }

  return (
    <Header className="app-header">
      <div className="app-header__container">
        {/* Логотип */}
        <Link to="/" className="app-header__logo">
          Линзы
        </Link>

        {/* Выпадающее меню с иконкой */}
        <div
          className="app-header__menu-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/contactLens.svg"
            alt="Меню"
            className="app-header__icon"
          />
          <AnimatedDropdown visible={showDropdown} /> 
        </div>
      </div>
    </Header>
  )
}

export default AppHeader
