import { configureStore } from '@reduxjs/toolkit';
import charterSlice from './charterSlice';

const store = configureStore({
    reducer:{
        charters: charterSlice
    }
})

export default store;