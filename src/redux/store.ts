import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from 'src/redux/charactersSlice';
import filterSlice from 'src/redux/filterSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice,
        detailed: charactersSlice,
        filter: filterSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;