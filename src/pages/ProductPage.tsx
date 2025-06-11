import { useParams } from 'react-router-dom'
import type { Lens } from '../components/types'
import { mockLenses } from '../mock/lenses'

const ProductPage = () => {
  const { id } = useParams()
  const lens = mockLenses.find((l: Lens) => l.id === id)

  if (!lens) return <div className="page-content">Линза не найдена</div>

  return (
    <div className="page-content">
      <h1>{lens.brand}</h1>
      <p><strong>SPH:</strong> {lens.sph}</p>
      <p><strong>CYL:</strong> {lens.cyl}</p>
      <p><strong>AXIS:</strong> {lens.axis}</p>
      <p><strong>Диаметр:</strong> {lens.diameter} мм</p>
    </div>
  )
}

export default ProductPage
