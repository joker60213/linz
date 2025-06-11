import { Link } from 'react-router-dom'
import './AnimatedDropdown.scss'

const AnimatedDropdown = ({ visible }: { visible: boolean }) => {
  const liClass = visible ? 'animate' : ''

  return (
    <nav className={`animated-dropdown ${visible ? 'show' : 'hide'}`}>
      <ul>
        <li className={liClass}><Link to="/about">О проекте</Link></li>
        <li className={liClass}><Link to="/contacts">Контакты</Link></li>
        {/* /delivery удалить потом */}
        <li className={liClass}><Link to="/delivery">Доставка и оплата</Link></li> 
      </ul>
    </nav>
  )
}

export default AnimatedDropdown
