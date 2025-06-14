import { useEffect, useState } from 'react'
import { List, Typography } from 'antd'
import BackButton from '../components/utils/BackButton'

const { Title, Paragraph } = Typography

const DevEmailsPage = () => {
  const [emails, setEmails] = useState<{ email: string; message: string; timestamp: string }[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('emailOrders')
    if (stored) {
      setEmails(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="page-content">
      <BackButton />
      <Title level={2}>Тестовая страница Email-заказов</Title>
      {emails.length === 0 ? (
        <Paragraph>Нет сохранённых email-копий заказов.</Paragraph>
      ) : (
        <List
          bordered
          dataSource={emails}
          renderItem={(item, idx) => (
            <List.Item>
              <div>
                <strong>{idx + 1}. {item.email}</strong> <em>({item.timestamp})</em>
                <Paragraph copyable style={{ whiteSpace: 'pre-wrap' }}>{item.message}</Paragraph>
              </div>
            </List.Item>
          )}
        />
      )}
    </div>
  )
}

export default DevEmailsPage

//чтобы попасть на эту сттраницу надо ввести в строке: /dev-emails