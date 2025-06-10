import { Link } from 'react-router-dom'
import './AnimatedDropdown.scss'

const AnimatedDropdown = ({ visible }: { visible: boolean }) => {
  return (
    <nav className={`animated-dropdown ${visible ? 'show' : 'hide'}`}>
      <ul>
        <li><Link to="/about">О проекте</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  )
}

export default AnimatedDropdown
