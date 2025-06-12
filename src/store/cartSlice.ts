import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Lens } from '../components/types'

type CartState = {
  items: Lens[]
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Lens>) {
      state.items.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCartByIndex(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart(state) {
      state.items = []
      localStorage.removeItem('cart')
    },
  },
})

export const { addToCart, removeFromCartByIndex, clearCart } = cartSlice.actions
export default cartSlice.reducer

// action.payload — это id линзы.