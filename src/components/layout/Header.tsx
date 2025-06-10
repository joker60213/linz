import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const { Header } = Layout

const AppHeader = () => {
  const location = useLocation()

  return (
    <Header className="app-header">
      <div className="app-header__container">
        <Link to="/" className="app-header__logo">
          Линзы
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className="app-header__menu"
          items={[
            {
              key: '/about',
              label: <Link to="/about">О проекте</Link>,
            },
          ]}
        />
      </div>
    </Header>
  )
}

export default AppHeader
