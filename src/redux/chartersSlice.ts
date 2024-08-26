import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import { Charter, ChartersState } from 'src/interface/interface';


const initialCharters: ChartersState = {
    charters: [],
    status: 'idle',
    error: null
};

export const fetchCharters = createAsyncThunk<Charter[], string>(
    'charter/fetchCharters',
    async (url: string, thunkAPI) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Failed to fetch charters');
            }
            const data = await response.json();
            return data as Charter[];
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);

const chartersSlice = createSlice({
    name: 'charter',
    initialState: initialCharters,
    reducers: {
        updateCharter: (state, action: PayloadAction<Charter>) => {
            const index = state.charters.findIndex((c: any) => c.id === action.payload.id);
            if (index !== -1) {
                state.charters[index] = action.payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharters.fulfilled, (state, action: PayloadAction<Charter[]>) => {
                state.charters = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchCharters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { updateCharter } = chartersSlice.actions;
export default chartersSlice.reducer;
