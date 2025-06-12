import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button 
      type="default" 
      onClick={() => navigate(-1)}
      style={{ marginBottom: '8px' }}
    >
      ← Назад
    </Button>
  )
}

export default BackButton
