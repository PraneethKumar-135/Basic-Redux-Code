const store = require('./app/store')
const cakeActions = require('./features/cake/cakeslice').cakeActions;
const icecreamActons = require('./features/icecream/icecreamSlice').icecreamActons
const biscutsActions = require('./features/biscuts/biscutsSlice').biscutsActions
const { chipsActions } = require('./features/snaks/chipsSlice')


console.log("InitialState", store.getState());

const unsubscribe = store.subscribe(() => {})


//Cake-Dispatch
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(2))

// //IceCream-Dispatch
// store.dispatch(icecreamActons.ordered())
// store.dispatch(icecreamActons.ordered())
// store.dispatch(icecreamActons.restocked(2))


// //biscutes-Dispatch
// store.dispatch(biscutsActions.ordered())
// store.dispatch(biscutsActions.ordered())
// store.dispatch(biscutsActions.restocked(2))

// //chips-Dispatch
// store.dispatch(chipsActions.ordered())
// store.dispatch(chipsActions.ordered())
// store.dispatch(chipsActions.restocked(2))