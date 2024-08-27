import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from 'src/redux/charactersSlice';
import characterFullSlice from 'src/redux/detailSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice,
        characterFull: characterFullSlice
    }
});

export default store;