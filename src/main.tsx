import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/reset.css'
import './styles/global.scss'
import { ConfigProvider, theme as antdTheme } from 'antd'

// подключаем Redux
import { Provider } from 'react-redux'
import { store } from './store'

const Root = () => {
  return (
    // управляет стилем компонентов Ant Design
    <ConfigProvider 
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorPrimary: '#1677ff',  // синий — кнопки, активные элементы
          colorBgBase: '#1a1a1a',   // фон страницы
          colorText: '#f5f5f5',     // текст по умолчанию
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      {/* подключаем Redux Provider */}
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
