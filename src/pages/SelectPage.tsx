import { Button, Card, Col, Divider, Form, InputNumber, Row, Tooltip, Typography } from 'antd'
import { useState } from 'react'
import './SelectPage.scss'

const { Title } = Typography

const SelectPage = () => {
  const [form] = Form.useForm()
  const [showResults, setShowResults] = useState(false)

  const onSearch = () => {
    form.validateFields().then(() => {
      setShowResults(true)
    })
  }

  const onReset = () => {
    form.resetFields()
    setShowResults(false)
  }

  return (
    <div className="page-content">
      <Title level={1}>Подбор линз</Title>
      <Form layout="vertical" form={form}>
        <Divider orientation="left">Левый глаз</Divider>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label={labelWithHelp('SPH', 'Сфера – оптическая сила линзы')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('CYL', 'Цилиндр – для коррекции астигматизма')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('AXIS', 'Ось цилиндра – в градусах от 0 до 180')}>
              <InputNumber style={{ width: '100%' }} min={0} max={180} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('DIA', 'Диаметр линзы')}>
              <InputNumber style={{ width: '100%' }} min={0} max={180} />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">Правый глаз</Divider>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label={labelWithHelp('SPH', 'Сфера – оптическая сила линзы')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('CYL', 'Цилиндр – для коррекции астигматизма')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('AXIS', 'Ось цилиндра – в градусах от 0 до 180')}>
              <InputNumber style={{ width: '100%' }} min={0} max={180} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('DIA', 'Диаметр линзы')}>
              <InputNumber style={{ width: '100%' }} min={0} max={180} />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">Общие параметры</Divider>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label={labelWithHelp('ADD', 'Аддидация – используется при пресбиопии')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={labelWithHelp('PD', 'Межзрачковое расстояние (Pupillary Distance)')}>
              <InputNumber style={{ width: '100%' }} step={0.5} />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button type="primary" onClick={onSearch}>Поиск</Button>
          <Button onClick={onReset}>Сброс</Button>
        </div>
      </Form>

      {showResults && (
        <div className="lens-results">
          <Divider>Подходящие линзы</Divider>
          <Row gutter={[16, 16]}>
            {[1, 2, 3].map((id) => (
              <Col span={8} key={id}>
                <Card
                  title={`Линзы бренд #${id}`}
                  actions={[
                    <Button key="details" type="link">Подробнее</Button>,
                    <Button key="add" type="primary">Добавить в корзину</Button>,
                  ]}
                >
                  <p>SPH: -2.00</p>
                  <p>CYL: -1.00</p>
                  <p>AXIS: 90°</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  )
}

const labelWithHelp = (label: string, help: string) => (
  <span>
    {label}{' '}
    <Tooltip title={help}>
      <span style={{ cursor: 'help', color: '#ff4d4f' }}>?</span>
    </Tooltip>
  </span>
)

export default SelectPage
