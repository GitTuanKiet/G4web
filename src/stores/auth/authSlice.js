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
    authUpdateUserInfo: (state, action) => ({
      ...state,
      user: action.payload.user,
      isLoggedIn: action.payload.isLoggedIn
    })
  }
})
export const { authRegister, authLogin, authRefreshToken, authUpdateUserInfo } = authSlice.actions

export default authSlice.reducer
