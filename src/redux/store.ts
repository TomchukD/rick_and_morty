import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from 'src/redux/charactersSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice
    }
});

export default store;