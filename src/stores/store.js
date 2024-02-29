import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export { store }
