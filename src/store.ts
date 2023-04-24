import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './slices/cartSlice'
import accountSliceReducer from './slices/accountSlice'


export const store = configureStore({
  reducer: {
    account: accountSliceReducer,
    cart: cartSliceReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch