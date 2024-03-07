import { createSlice } from '@reduxjs/toolkit'

import { mockCities, dates } from 'apis/mockData'
const initialState = {
  dates: dates,
  cities: mockCities,
  cinemas: [],
  showtimes: [],
  movies: [],
  loading: false,
  error: null
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData () { },
    fetchingData(state) {
      state.loading = true
    },
    fetchDataSuccess(state, action) {
      state.loading = false
      state.error = null
      state.cinemas = action.payload.cinemas
      state.showtimes = action.payload.showtimes
      state.movies = action.payload.movies
    },
    fetchDataFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { fetchData, fetchingData, fetchDataSuccess, fetchDataFailed } = dataSlice.actions
export default dataSlice.reducer