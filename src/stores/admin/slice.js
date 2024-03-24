import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  adminToken: false
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminClear: () => { return initialState },
    adminLoading: (state) => { state.loading = true },
    adminSuccess: (state) => { state.loading = false; state.error = null },
    adminFinish: (state) => { state.loading = false },
    adminError: (state, action) => { state.error = action.payload, state.loading = false },
    orderReport: () => { },
    createMovie: () => { },
    updateMovie: () => { },
    deleteMovie: () => { },
    createManyShowtime: () => { },
    updateShowtime: () => { },
    deleteShowtime: () => { }
  }
})
export const {
  adminLoading,
  adminSuccess,
  adminFinish,
  adminError,
  adminClear,
  orderReport,
  createMovie,
  updateMovie,
  deleteMovie,
  createManyShowtime,
  updateShowtime,
  deleteShowtime
} = adminSlice.actions

export default adminSlice.reducer
