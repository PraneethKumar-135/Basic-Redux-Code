import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
}

const slice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        Submit: (state, action) => ({
            ...state,
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            salary: action.payload.salary,
            date: action.payload.date,
        })
    }
})

export default slice.reducer
export const { Submit } = slice.actions



