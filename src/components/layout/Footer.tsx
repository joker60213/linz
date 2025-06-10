import { Layout } from 'antd'
import './Footer.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
<Footer className="app-footer">
  <div>
    © {new Date().getFullYear()} Линзы. Все права защищены.
  </div>
</Footer>

  )
}

export default AppFooter
