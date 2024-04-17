import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered(state) {
            state.numberOfCakes--;
            console.log("ordered");
        },
        reordered(state, action) {
            state.numberOfCakes += action.payload;
            console.log("Stocked");
        }
    },
});

export const { ordered, reordered } = cakeSlice.actions;

export default cakeSlice.reducer;

