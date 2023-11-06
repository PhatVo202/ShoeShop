import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import productReducer from './reducers/productReducer'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  productReducer,
  userReducer
})

export const store = configureStore({
  reducer: persistReducer({ key: 'root', storage: storage }, rootReducer),
  devTools: true,
  middleware: [thunk]
})
