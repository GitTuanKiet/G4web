import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    role: null,
    isLoggedIn: false
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      ...action.payload
    }),
    authRegister: (state, action) => ({ ...state, ...action.payload }),
    authUpdateUserInfo: (state, action) => ({
      ...state,
      user: action.payload.user,
      isLoggedIn: action.payload.isLoggedIn
    })
  }
})
export const { authRegister, authLogin, authUpdateUserInfo } = authSlice.actions

export default authSlice.reducer
