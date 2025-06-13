import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import type { Lens } from '../types'
import './LensCard.scss'

type Props = {
  lens: Lens
  onAddToCart: (lens: Lens) => void
}

const LensCard = ({ lens, onAddToCart }: Props) => {
  return (
<Card
  className="lens-card"
  title={<div style={{ textAlign: 'center' }}>{lens.brand}</div>}
  style={{ marginBottom: 16 }}
>
  <div className="lens-card-content">
    <p><strong>SPH:</strong> {lens.sph}</p>
    <p><strong>CYL:</strong> {lens.cyl}</p>
    <p><strong>AXIS:</strong> {lens.axis}</p>
    <p><strong>Диаметр:</strong> {lens.diameter} мм</p>
  </div>

  <div className="lens-card-buttons">
    <Link to={`/product/${lens.id}`}>
      <Button type="link">Подробнее</Button>
    </Link>
    <Button type="primary" onClick={() => onAddToCart(lens)}>
      В корзину
    </Button>
  </div>
</Card>

  )
}

export default LensCard
