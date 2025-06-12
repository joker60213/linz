import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AppLayout from './components/layout/Layout'
import ContactsPage from './pages/ContactsPage'
import SelectPage from './pages/SelectPage'
import DeliveryPage from './pages/DeliveryPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App

// AnimatedDropdown - туда пишем раздела, а в App пишем роутеры.