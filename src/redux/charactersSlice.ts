import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, CharacterState } from 'src/interface/interface';
import { RootState } from 'src/redux/store';


const initialCharacter: CharacterState = {
    character: [],
    status: 'idle',
    error: null
};

export const fetchCharacter = createAsyncThunk<Character[], string>(
    'charter/fetchCharacter',
    async (url: string, thunkAPI) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Failed to fetch Character');
            }
            const data = await response.json();
            return data.results as Character[];
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);

const charactersSlice = createSlice({
    name: 'charter',
    initialState: initialCharacter,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<Character[]>) => {
                state.character = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchCharacter.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharacter.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const selectCharters = (state: RootState) => state.characters.character;
export default charactersSlice.reducer;
