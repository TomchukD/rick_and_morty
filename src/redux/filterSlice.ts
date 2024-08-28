import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { TypeChar } from 'src/Type/type';

interface InitialState {
    name: string | null,
    status: TypeChar | null;
}

const initialState: InitialState = {
    name: null,
    status: null
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterName: (state, action: PayloadAction<string | null>) => {
            return { ...state, name: action.payload };
        },
        setFilterStatus: (state, action: PayloadAction<TypeChar | null>) => {
            state.status = action.payload;
        },
        resetFilter: (state, action: PayloadAction<null>) => initialState
    }
});

export const { setFilterName, setFilterStatus, resetFilter } = filterSlice.actions;
export const selectName = (state: RootState) => state.filter.name;
export const selectStatus = (state: RootState) => state.filter.status;

export default filterSlice.reducer;