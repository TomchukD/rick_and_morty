import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

interface InitialState {
    name: string,
    status: 'Alive' | 'Dead' | 'unknown' | null;
}

const initialState: InitialState = {
    name: '',
    status: null
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterName: (state, action) => {
        },
        setFilterStatus: (state, action) => {
        },
        resetFilter: (state, action) => {
        }
    }
});

export const { setFilterName, setFilterStatus, resetFilter } = filterSlice.actions;
export const selectName = (state: RootState) => state.filter.name;
export const selectStatus = (state: RootState) => state.filter.name;

export default filterSlice.reducer;