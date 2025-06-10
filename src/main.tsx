import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/reset.css'
import './styles/global.scss'
import { ConfigProvider, theme as antdTheme } from 'antd'

const Root = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          colorBgBase: '#1a1a1a',
          colorText: '#f5f5f5',
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
