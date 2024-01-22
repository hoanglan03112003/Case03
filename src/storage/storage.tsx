import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../action/addtocart'
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})