const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    numberOfChipPackets: 50
}

const chipsSlice = createSlice({
    name: 'chips',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfChipPackets--
        },
        restocked: (state, action) => {
            state.numberOfChipPackets += action.payload
        }
    }
})

module.exports = chipsSlice.reducer
module.exports.chipsActions = chipsSlice.actions
