import { Typography, List } from 'antd'
import BackButton from '@/components/utils/BackButton'

const { Title, Paragraph, Text, Link } = Typography

const PrivacyPolicyPage = () => {
  return (
    <div className="page-content" style={{ maxWidth: 720, margin: '0 auto', padding: '2rem' }}>
      <BackButton />
      <Title level={2}>Политика конфиденциальности</Title>

      <Paragraph>
        Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
        пользователей сайта <Text strong>linzy.ru</Text> (далее — «Сайт»), предоставляемых при оформлении заказа.
      </Paragraph>

      <Title level={4}>1. Сбор персональных данных</Title>
      <Paragraph>Сайт собирает следующие персональные данные:</Paragraph>
      <List
        size="small"
        dataSource={['адрес электронной почты (email)', 'никнейм (username) в мессенджере Telegram']}
        renderItem={item => <List.Item style={{ paddingLeft: 0 }}>• {item}</List.Item>}
      />

      <Title level={4}>2. Цель обработки данных</Title>
      <Paragraph>Персональные данные используются исключительно для:</Paragraph>
      <List
        size="small"
        dataSource={['связи с пользователем по заказу', 'отправки копии заказа по запросу пользователя']}
        renderItem={item => <List.Item style={{ paddingLeft: 0 }}>• {item}</List.Item>}
      />

      <Title level={4}>3. Правовые основания обработки</Title>
      <Paragraph>
        Обработка персональных данных осуществляется на основании добровольного согласия пользователя (ст. 6 ФЗ-152).
      </Paragraph>

      <Title level={4}>4. Хранение и защита данных</Title>
      <Paragraph>
        Все данные хранятся с соблюдением мер безопасности и не передаются третьим лицам без согласия пользователя.
      </Paragraph>

      <Title level={4}>5. Права пользователя</Title>
      <Paragraph>Пользователь имеет право:</Paragraph>
      <List
        size="small"
        dataSource={[
          'узнать, какие данные о нём хранятся',
          'потребовать их обновления или удаления',
          'отозвать своё согласие на обработку данных',
        ]}
        renderItem={item => <List.Item style={{ paddingLeft: 0 }}>• {item}</List.Item>}
      />
      <Paragraph>
        Для реализации прав пользователь может написать на почту:{' '}
        <Link href="mailto:linzy-support@mail.ru">linzy-support@mail.ru</Link>
      </Paragraph>

      <Title level={4}>6. Изменения политики</Title>
      <Paragraph>
        Администрация сайта оставляет за собой право вносить изменения в настоящую Политику.
        Дата размещения: <Text strong>14 июня 2025 г.</Text>
      </Paragraph>
    </div>
  )
}

export default PrivacyPolicyPage
