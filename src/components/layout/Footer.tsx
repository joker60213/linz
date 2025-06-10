import { Layout } from 'antd'
import './Footer.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
<Footer className="app-footer">
  <div className="app-footer__inner">
    © {new Date().getFullYear()} Линзы. Все права защищены.
  </div>
</Footer>

  )
}

export default AppFooter
