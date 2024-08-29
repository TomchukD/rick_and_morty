import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from 'src/redux/charactersSlice';
import filterSlice from 'src/redux/filterSlice';
import paginationSlice from 'src/redux/paginationSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice,
        detailed: charactersSlice,
        filter: filterSlice,
        pagination: paginationSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;