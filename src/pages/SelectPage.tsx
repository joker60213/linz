import { Button, Col, Divider, Form, InputNumber, Row, Tooltip, Typography } from 'antd'
import { useState, useEffect } from 'react'
import { mockLenses } from '../mock/lenses'
import LensList from '../components/lenses/LensList'
import type { Lens } from '../components/types' 
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import BackButton from "../components/utils/BackButton"

import './SelectPage.scss'

const { Title } = Typography

const SelectPage = () => {
  const [filteredLeftLenses, setFilteredLeftLenses] = useState<Lens[]>([])
  const [filteredRightLenses, setFilteredRightLenses] = useState<Lens[]>([])
  const [form] = Form.useForm()
  const [showResults, setShowResults] = useState(false)
  const [setFilteredLenses] = useState<Lens[]>([])
  const [canSearch, setCanSearch] = useState(false)

  const dispatch = useDispatch()

  const handleAddToCart = (lens: Lens) => {
  dispatch(addToCart(lens))
}
const onSearch = () => {
  const values = form.getFieldsValue()

  const hasAtLeastOneValue = Object.values(values).some(
    (val) => val !== undefined && val !== null && val !== ''
  )
  if (!hasAtLeastOneValue) {
    setFilteredLeftLenses([])
    setFilteredRightLenses([])
    setShowResults(false)
    return
  }

  const hasLeftEyeValues =
    values.sphLeft !== undefined ||
    values.cylLeft !== undefined ||
    values.axisLeft !== undefined ||
    values.diaLeft !== undefined

  const hasRightEyeValues =
    values.sphRight !== undefined ||
    values.cylRight !== undefined ||
    values.axisRight !== undefined ||
    values.diaRight !== undefined

  const filterLenses = (side: 'Left' | 'Right'): Lens[] => {
    return mockLenses.filter((lens) => {
      const sph = values[`sph${side}`]
      const cyl = values[`cyl${side}`]
      const axis = values[`axis${side}`]
      const dia = values[`dia${side}`]

      return (
        (sph === undefined || parseFloat(lens.sph) === parseFloat(sph.toFixed(2))) &&
        (cyl === undefined || parseFloat(lens.cyl) === parseFloat(cyl.toFixed(2))) &&
        (axis === undefined || parseInt(lens.axis) === axis) &&
        (dia === undefined || parseFloat(lens.diameter.toFixed(2)) === dia)
      )
    })
  }

  // Показываем или очищаем результат по каждому глазу
  if (hasLeftEyeValues) {
    setFilteredLeftLenses(filterLenses('Left'))
  } else {
    setFilteredLeftLenses([])
  }

  if (hasRightEyeValues) {
    setFilteredRightLenses(filterLenses('Right'))
  } else {
    setFilteredRightLenses([])
  }

  // Отображаем секцию с результатами, если есть что показать
  setShowResults(hasLeftEyeValues || hasRightEyeValues)
}



  useEffect(() => {
    const interval = setInterval(() => {
      const values = form.getFieldsValue()
      const hasValues = Object.values(values).some(val => val !== undefined && val !== null && val !== '')
      setCanSearch(hasValues)
    }, 300)

    return () => clearInterval(interval)
  }, [form])


  const onReset = () => {
    form.resetFields()
    setShowResults(false)
    setFilteredLenses([])
  }

  return (
    <div className="page-content select-page">

      <div className="select-page-form">
      <BackButton />
      <Title level={1}>Подбор линз</Title>

        <Form layout="vertical" form={form}>
          {/* Левый глаз */}
          <Divider orientation="left">Левый глаз</Divider>
          <Row gutter={16}>
            <Col span={6}>
            <Form.Item name="sphLeft" label={labelWithHelp('SPH', 'Сфера – оптическая сила линзы')}>
              <InputNumber style={{ width: '100%' }} step={0.25} />
            </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="cylLeft" label={labelWithHelp('CYL', 'Цилиндр – для коррекции астигматизма')}>
                <InputNumber style={{ width: '100%' }} step={0.25} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="axisLeft" label={labelWithHelp('AXIS', 'Ось цилиндра – в градусах от 0 до 180')}>
                <InputNumber style={{ width: '100%' }} min={0} max={180} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="diaLeft" label={labelWithHelp('DIA', 'Диаметр линзы')}>
                <InputNumber style={{ width: '100%' }} min={0} max={20} />
              </Form.Item>
            </Col>
          </Row>

          {/* Правый глаз */}
          <Divider orientation="left">Правый глаз</Divider>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item name="sphRight" label={labelWithHelp('SPH', 'Сфера – оптическая сила линзы')}>
                <InputNumber style={{ width: '100%' }} step={0.25} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="cylRight" label={labelWithHelp('CYL', 'Цилиндр – для коррекции астигматизма')}>
                <InputNumber style={{ width: '100%' }} step={0.25} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="axisRight" label={labelWithHelp('AXIS', 'Ось цилиндра – в градусах от 0 до 180')}>
                <InputNumber style={{ width: '100%' }} min={0} max={180} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="diaRight" label={labelWithHelp('DIA', 'Диаметр линзы')}>
                <InputNumber style={{ width: '100%' }} min={0} max={20} />
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
            <Button type="primary" onClick={onSearch} disabled={!canSearch}>Поиск</Button>
            <Button onClick={onReset}>Сброс</Button>
          </div>
        </Form>
      </div>

      {showResults && (
        <div className="lens-results-columns">
          <div className="lens-column">
            <Divider orientation="center">Линзы для левого глаза</Divider>
            <LensList lenses={filteredLeftLenses} onAddToCart={handleAddToCart} />
          </div>

          <div className="lens-column">
            <Divider orientation="center">Линзы для правого глаза</Divider>
            <LensList lenses={filteredRightLenses} onAddToCart={handleAddToCart} />
          </div>
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
