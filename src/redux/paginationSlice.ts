import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export default paginationSlice.reducer;