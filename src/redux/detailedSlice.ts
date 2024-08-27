import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character } from 'src/interface/interface';
import { addCharacter } from 'src/redux/charactersSlice';


const initialCharacter: Character = {
    name: '',
    url: '',
    location: {
        name: '',
        url: ''
    },
    original: {
        name: '',
        url: ''
    },
    species: '',
    status: 'unknown',
    type: '',
    episode: [],
    gender: 'unknown',
    image: '',
    id: 0
};

export const fetchCharacterById = createAsyncThunk<Character, string>(
    'charter/fetchDetailed',
    async (url: string, thunkAPI) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Failed to fetch Character');
            }
            const data = await response.json();
            thunkAPI.dispatch(addCharacter(data));
            return data.results as Character;
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);

const detailedSlice = createSlice({
    name: 'charter',
    initialState: initialCharacter,
    reducers: {}
});

export default detailedSlice.reducer;
