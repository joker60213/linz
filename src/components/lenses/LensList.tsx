import { Row, Col } from 'antd'
import type { Lens } from '../types' 
import LensCard from './LensCard'

type Props = {
  lenses: Lens[]
  onAddToCart: (lens: Lens) => void
}

const LensList = ({ lenses, onAddToCart }: Props) => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
      {lenses.map(lens => (
        <Col span={8} key={lens.id}>
          <LensCard lens={lens} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  )
}

export default LensList