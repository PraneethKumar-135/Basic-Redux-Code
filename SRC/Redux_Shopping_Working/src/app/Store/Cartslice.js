const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    products: [],
    price: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            // return [...state, action.paylod]
            state.products.push(action.payload);
        },
        PriceAction: (state, action) => {
            state.price = state.price + action.payload;
        },
        remove(state, action) {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        UpdatePriceAction: (state, action) => { state.price = state.price - action.payload; },
    },
});

export const { add, PriceAction, remove, UpdatePriceAction } = cartSlice.actions;

export default cartSlice.reducer;