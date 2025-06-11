import type { Lens } from '../types'
import LensCard from './LensCard'

type Props = {
  lenses: Lens[]
  onAddToCart: (lens: Lens) => void
}

const LensList = ({ lenses, onAddToCart }: Props) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      {lenses.map(lens => (
        <LensCard key={lens.id} lens={lens} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export default LensList
