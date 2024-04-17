// import { configureStore } from "@reduxjs/toolkit"
// import formreducer from "./formSlice"

// const store = configureStore({
//     reducer: {
//         form: formreducer
//     }
// })

// export default store

import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cakeslice';
import formSlice from './formSlice';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
    },
})

export default store

