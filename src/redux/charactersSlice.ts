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
    reducers: {
        addCharacter: (state, action: PayloadAction<Character>) => {
            const characterIndex = state.character.findIndex(i => i.id === action.payload.id);
            if (characterIndex !== -1) {
                state.character[characterIndex] = action.payload;
                return;
            }
            state.character.unshift(action.payload);
        },
        deleteCharacter: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                character: state.character.filter(character => character.id !== action.payload)
            };
        }
    },
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
export const { addCharacter, deleteCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
