import  configureStore  from '@reduxjs/toolkit'
import slice from './slice'
export default Store = configureStore({
    reducer: {
        Submit: slice
    }
})

