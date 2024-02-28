import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export { store }
