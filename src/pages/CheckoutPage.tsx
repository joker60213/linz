import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Form, Input, Radio, Checkbox } from 'antd'
import { useState } from 'react'
import { sendOrderToTelegram } from '../components/utils/sendTelegram'
import { useDispatch } from 'react-redux'
import { removeManyByIndexes } from '../store/cartSlice'
import BackButton from "../components/utils/BackButton"

import dayjs from 'dayjs'

const CheckoutPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const selectedItems = state?.selectedItems || []
  const selectedIndexes = state?.selectedIndexes || []
  const [method, setMethod] = useState<'pickup' | 'delivery'>('pickup')
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const handleSubmit = async (values: any) => {
    const now = dayjs().format('DD.MM.YYYY HH:mm')

    const orderMessage = `
🛒 *Новый заказ* (${now})
📞 Телефон: ${values.phone || '—'}
💬 Telegram: ${values.telegram}
📦 Способ получения: ${method === 'pickup' ? 'Самовывоз' : 'Доставка'}
${method === 'delivery' ? `🏠 Адрес: ${values.address}` : ''}

📝 Комментарий: ${values.comment || '—'}

📋 Товары:
${selectedItems.map((item: any, i: number) => `  ${i + 1}. ${item.brand} — SPH: ${item.sph}`).join('\n')}
    `.trim()

    try {
      await sendOrderToTelegram(orderMessage)

      if (values.sendCopy && values.telegram?.startsWith('@')) {
        const userChatId = values.telegram.trim().replace('@', '')
        await sendOrderToTelegram(orderMessage, userChatId)
      }

      dispatch(removeManyByIndexes(selectedIndexes))
      navigate('/')
    } catch (error) {
      console.error('Ошибка отправки заказа:', error)
    }
  }

  return (
    <div className="page-content">
      <BackButton />
      <h1>Оформление заказа</h1>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="phone" label="Номер телефона">
          <Input placeholder="+7..." />
        </Form.Item>

        <Form.Item
          name="telegram"
          label="* Никнейм в Telegram"
          rules={[{ required: true, message: 'Введите Telegram (@username)' }]}
        >
          <Input placeholder="@username" />
        </Form.Item>

        <Form.Item name="comment" label="Комментарий">
          <Input.TextArea placeholder="Необязательно" />
        </Form.Item>

        <Form.Item label="Способ получения">
          <Radio.Group
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          >
            <Radio value="pickup">Самовывоз</Radio>
            <Radio value="delivery">Доставка</Radio>
          </Radio.Group>
        </Form.Item>

        {method === 'delivery' ? (
          <Form.Item
            name="address"
            label="Адрес доставки"
            rules={[{ required: true, message: 'Введите адрес доставки' }]}
          >
            <Input placeholder="Введите адрес" />
          </Form.Item>
        ) : (
          <Form.Item label="Адрес самовывоза">
            <Input disabled value="Мы позже сюда добавим" />
          </Form.Item>
        )}

        <Form.Item name="sendCopy" valuePropName="checked">
          <Checkbox>Получить копию себе в Telegram</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Отправить заказ
        </Button>
      </Form>
    </div>
  )
}

export default CheckoutPage
