import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import authReducer from './auth/slice'
import userReducer from './user/slice'
import bookingReducer from './booking/slice'
import dataReducer from './data/slice'
import paymentReducer from './payment/slice'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    booking: bookingReducer,
    data: dataReducer,
    payment: paymentReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export { store }
