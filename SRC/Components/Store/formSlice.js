import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: 'form',
    initialState: [],
    reducers: {
        fillForm(state, action) {
            return [...state, action.payload]; // Return a new array with the payload object appended
        },
    }
});


export const { fillForm } = formSlice.actions;

export default formSlice.reducer;
