const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    numberoficecream: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            numberoficecream = state.numberoficecream --
        },
        restocked: (state, action) => {
            state.numberoficecream += action.payload
        },
    },
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActons = icecreamSlice.actions