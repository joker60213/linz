import { Row, Col } from 'antd'
import type { Lens } from '../types'
import LensCard from './LensCard'
import './LensList.scss'

type Props = {
  lenses: Lens[]
  onAddToCart: (lens: Lens) => void
}

const LensList = ({ lenses, onAddToCart }: Props) => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
      {lenses.map((lens, index) => (
        <Col
          xs={24}
          sm={12}
          md={8}
          key={lens.id}
          className="lens-card-animated"
          style={{
            animationDelay: `${index * 0.09}s`,
            display: 'flex', // чтобы Card растягивался
            justifyContent: 'center'
          }}
        >
          <LensCard lens={lens} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  )
}

export default LensList
