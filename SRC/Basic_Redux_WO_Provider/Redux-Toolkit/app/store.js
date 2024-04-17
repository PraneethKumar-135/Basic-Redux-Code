const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeslice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const biscutsReducer = require('../features/biscuts/biscutsSlice')
const chipsReducer = require('../features/snaks/chipsSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        biscuts: biscutsReducer,
        chips: chipsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store