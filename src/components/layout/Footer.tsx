import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import './Footer.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Линзы. Все права защищены.</div>
        <div className="footer-link">
          <Link to="/privacy-policy">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </Footer>
  )
}

export default AppFooter
