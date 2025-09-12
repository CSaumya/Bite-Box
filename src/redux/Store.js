import { configureStore, createReducer } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import CategorySlice from './Slice/CategroySlice'
import SearchSlice from './Slice/SearchSlice'

export const store = configureStore({
    reducer:{
        cart: CartSlice,
        category : CategorySlice,
        search: SearchSlice,
    },
})

export default store;