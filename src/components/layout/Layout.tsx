import { Layout } from 'antd'
import AppHeader from './Header'
import AppFooter from './Footer'

const { Content } = Layout

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content style={{ padding: '24px'}}>
        {children}
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout
