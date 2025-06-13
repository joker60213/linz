import { Row, Col } from 'antd'
import type { Lens } from '../types' 
import LensCard from './LensCard'
import './LensList.scss' // если ты добавил туда анимацию

type Props = {
  lenses: Lens[]
  onAddToCart: (lens: Lens) => void
}

const LensList = ({ lenses, onAddToCart }: Props) => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
      {lenses.map((lens, index) => (
        <Col
          span={24}
          key={lens.id}
          className="lens-card-animated"
          style={{ 
            animationDelay: `${index * 0.09}s`,
            maxWidth: 280,
            margin: '0 auto' // отцентровать
        }}
        >
          <LensCard lens={lens} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  )
}

export default LensList
