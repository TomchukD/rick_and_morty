import { createSlice } from '@reduxjs/toolkit';

const initialCharters = {
    charters: []
}
 const charterSlice = createSlice({
     name: "charter",
     initialState: initialCharters,
     reducers:{
            updateCharter: (state, action) => {}
     }
 })

export const {updateCharter} = charterSlice.actions;
export default charterSlice.reducer;