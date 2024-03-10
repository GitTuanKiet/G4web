import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  history: null,
  cards: null,
  info: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoading: (state) => { state.loading = true },
    userSuccess: (state) => { state.loading = false; state.error = null },
    userFinish: (state) => { state.loading = false },
    userError: (state, action) => { state.error = action.payload, state.loading = false },
    userClear: () => initialState,
    setInfo: (state, action) => { state.info = action.payload },
    setHistory: (state, action) => { state.history = action.payload },
    setCards: (state, action) => { state.cards = action.payload },
    updateProfile: () => { },
    changePassword: () => { },
    uploadAvatar: () => { },
    setupPIN: () => { },
    fetchHistory: () => { },
    fetchCards: () => { }
  }
})
export const {
  userLoading,
  userSuccess,
  userFinish,
  userError,
  userClear,
  setInfo,
  setCards,
  setHistory,
  updateProfile,
  changePassword,
  uploadAvatar,
  setupPIN,
  fetchHistory,
  fetchCards
} = userSlice.actions

export default userSlice.reducer
