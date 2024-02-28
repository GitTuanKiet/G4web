import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    isLoggedIn: false
  },
  reducers: {
    authLogin: (state, action) => ({ ...state, ...action.payload }),
    authRegister: (state, action) => ({ ...state, ...action.payload }),
    authRefreshToken: (state, action) => ({ ...state, ...action.payload }),
    authForgotPassword: (state, action) => ({ ...state, ...action.payload }),
    setUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      isLoggedIn: action.payload.isLoggedIn
    })
  }
})
export const { authRegister, authLogin, authRefreshToken, authForgotPassword, setUser } = authSlice.actions

export default authSlice.reducer
