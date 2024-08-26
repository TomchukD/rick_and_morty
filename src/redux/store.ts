import { configureStore } from '@reduxjs/toolkit';
import charterSlice from 'src/redux/chartersSlice';

const store = configureStore({
    reducer: {
        charters: charterSlice
    }
});

export default store;