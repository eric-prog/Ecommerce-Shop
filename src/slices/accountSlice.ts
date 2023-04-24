import { createSlice } from '@reduxjs/toolkit'
import placeHolder from "../assets/person.jpeg"
import { AccountModel } from '@/models/AccountModel'


const initialState: AccountModel = {
    firstName: "Eric",
    lastName: "Sheen",
    email: "email@email.com",
    billingStatus: "Pro",
    profileImg: "",
}


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setFirstName: (state, { payload }) => {
      state.firstName = payload
    },
    setLastName: (state, { payload }) => {
      state.lastName = payload
    },
    setEmail: (state, { payload }) => {
      state.email = payload
    },
    setBillingStatus: (state, { payload }) => {
      state.billingStatus = payload
    },
    setProfileImg: (state, { payload }) => {
      state.profileImg = payload
    },
  }
})


export const { setFirstName, setLastName, setEmail, setBillingStatus, setProfileImg } = accountSlice.actions
export default accountSlice.reducer