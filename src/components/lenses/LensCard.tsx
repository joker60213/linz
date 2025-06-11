import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import type { Lens } from '../types'

type Props = {
  lens: Lens
  onAddToCart: (lens: Lens) => void
}

const LensCard = ({ lens, onAddToCart }: Props) => {
  return (
    <Card title={lens.brand} style={{ marginBottom: 16 }}>
      <p><strong>SPH:</strong> {lens.sph}</p>
      <p><strong>CYL:</strong> {lens.cyl}</p>
      <p><strong>AXIS:</strong> {lens.axis}</p>
      <p><strong>Диаметр:</strong> {lens.diameter} мм</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to={`/product/${lens.id}`}>
          <Button type="link">Подробнее</Button>
        </Link>
        <Button type="primary" onClick={() => onAddToCart(lens)}>В корзину</Button>
      </div>
    </Card>
  )
}

export default LensCard
