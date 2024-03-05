import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    isLoggedIn: false,
    history: null,
    cards: null
  },
  reducers: {
    authLogin: (state, action) => ({ ...state, ...action.payload }),
    authRegister: (state, action) => ({ ...state, ...action.payload }),
    authRefreshToken: (state, action) => ({ ...state, ...action.payload }),
    authForgotPassword: (state, action) => ({ ...state, ...action.payload }),
    setUser: (state, action) => ({ ...state, ...action.payload }),
    userUpdateProfile: (state, action) => ({ ...state, ...action.payload }),
    userChangePassword: (state, action) => ({ ...state, ...action.payload }),
    userUploadAvatar: (state, action) => ({ ...state, ...action.payload }),
    userSetupPIN: (state, action) => ({ ...state, ...action.payload }),
    userHistory: (state, action) => ({ ...state, ...action.payload }),
    userCards: (state, action) => ({ ...state, ...action.payload })
  }
})
export const {
  authRegister,
  authLogin,
  authRefreshToken,
  authForgotPassword,
  setUser,
  userUpdateProfile,
  userChangePassword,
  userUploadAvatar,
  userSetupPIN,
  userHistory,
  userCards
} = authSlice.actions

export default authSlice.reducer
