import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import authReducer from './auth/authSlice'
import bookingReducer from './booking/slice'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export { store }
