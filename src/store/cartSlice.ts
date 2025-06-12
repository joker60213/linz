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
    removeManyByIndexes(state, action: PayloadAction<number[]>) {
  // Удаляем по индексам с конца, чтобы не сдвигать массив
      const sorted = [...action.payload].sort((a, b) => b - a)
      for (const i of sorted) {
        state.items.splice(i, 1)
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
  },
})

export const { addToCart, removeFromCartByIndex, clearCart, removeManyByIndexes } = cartSlice.actions
export default cartSlice.reducer

// action.payload — это id линзы.