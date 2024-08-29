import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

interface InitialState {
    page: number,
    rowsPerPage: number;
}

const initialState: InitialState = {
    page: 0,
    rowsPerPage: 5
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            return { ...state, page: action.payload };
        },
        setRowPerPage: (state, action: PayloadAction<number>) => {
            return { ...state, rowsPerPage: action.payload };
        }
    }
});

export const { setPage, setRowPerPage } = paginationSlice.actions;
export const selectPage = (state: RootState) => state.pagination.page;
export const selectRowPerPage = (state: RootState) => state.pagination.rowsPerPage;

export default paginationSlice.reducer;