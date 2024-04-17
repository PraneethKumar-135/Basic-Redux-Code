const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    numberofbiscutes: 100
}

const biscutsSlice = createSlice({
    name: 'biscuts',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberofbiscutes--
        },
        restocked: (state, action) => {
            state.numberofbiscutes += action.payload
        }
    },
})

module.exports = biscutsSlice.reducer
module.exports.biscutsActions = biscutsSlice.actions