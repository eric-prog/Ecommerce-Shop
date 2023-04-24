import { createSlice } from '@reduxjs/toolkit'
import { ProductModel, CartSliceModel } from "../models/ProductModel"
import { data } from '@/data/data'


const initialState: CartSliceModel = {
    products: data,
    totalPrice: 0,
    totalQuantity: 0
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const prod = state.products.find(prod => prod.title === payload.productInfo.title) as ProductModel
      prod.amount++
    },
    decreaseAmount: (state, { payload }) => {
      const prod = state.products.find(prod => prod.title === payload.productInfo.title) as ProductModel
      prod.amount--
    },
    removeProduct: (state, { payload }) => {
      const prod = state.products.find(prod => prod.title === payload.productInfo.title) as ProductModel
      prod.amount = 0
    },
    updateTotal: (state) => {
      let quantity = 0
      let total = 0
      state.products.forEach(prod => {
        quantity += prod.amount
        total += prod.amount * prod.price
      })
      state.totalQuantity = quantity
      state.totalPrice = total
    }
  }
})


export const { increaseAmount, decreaseAmount, removeProduct, updateTotal } = cartSlice.actions
export default cartSlice.reducer