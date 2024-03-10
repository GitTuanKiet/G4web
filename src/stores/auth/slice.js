import { createSlice } from '@reduxjs/toolkit'

import { getToken, getRefreshToken } from 'utils/auth'
const initialState = {
  accessToken: getToken(),
  refreshToken: getRefreshToken(),
  verified: false,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoading: (state) => { state.loading = true },
    authSuccess: (state, action) => ({ ...state, ...action.payload, loading: false, verified: true }),
    authFinish: (state) => { state.loading = false },
    authError: (state, action) => { state.error = action.payload, state.loading = false },
    authVerify: (state) => { state.verified = true },
    authClear: () => initialState,
    register: () => { },
    login: () => { },
    logout: () => { },
    refreshToken: () => { },
    forgotPassword: () => { },
    verifyEmail: () => { },
    resetPassword: () => { }
  }
})
export const {
  authLoading,
  authSuccess,
  authFinish,
  authError,
  authVerify,
  authClear,
  register,
  login,
  logout,
  refreshToken,
  forgotPassword,
  verifyEmail,
  resetPassword
} = authSlice.actions

export default authSlice.reducer
