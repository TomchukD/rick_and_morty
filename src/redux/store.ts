import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from 'src/redux/charactersSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;