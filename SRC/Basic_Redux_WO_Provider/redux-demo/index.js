const redux = require('redux')
const createStore = redux.createStore
const bindActioncreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
//Immer
const produce = require('immer').produce
//middleWare
const applyMiddleware = redux.applyMiddleware
//Logger
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


//Cake-Actions
const Cake_Ordered = "Cake_Ordered"
const Cake_Fill = "Cake_Fill"

//IceCream-Actions
const IceCream_Ordered = "IceCream_Ordered"
const IceCream_Fill = "IceCream_Fill"


//Actions--Cake
function orderCake() {
    return {
        type: Cake_Ordered,
    }
}
function CakeFill(fill) {
    return {
        type: Cake_Fill,
        payload: fill
    }
}
//Actions--IceCream
function orderIcecream() {
    return {
        type: IceCream_Ordered,
    }
}
function IcecreamFill(fill) {
    return {
        type: IceCream_Fill,
        payload: fill
    }
}


//State--Cake
const initialStateofCake = {
    numberOfCakes: 10,
}

//State--IceCream
const initialStateofIceCreme = {
    numberOfIceCream: 20,
}

//Cake_Reducer
const Cake_Reducer = (state = initialStateofCake, action) => {
    switch (action.type) {
        case Cake_Ordered:
            // return {
            //     ...state,
            //     numberOfCakes: state.numberOfCakes - 1
            // }

            //By Using Immer
            return produce(state, (draft) => {
                draft.numberOfCakes = state.numberOfCakes - 1
            })
        case Cake_Fill:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}

//IceCream_Reducer
const IceCream_Reducer = (state = initialStateofIceCreme, action) => {
    switch (action.type) {
        case IceCream_Ordered:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        case IceCream_Fill:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream + action.payload
            }
        default:
            return state
    }
}


//combineReducers
const rootReducers = combineReducers({
    Cake: Cake_Reducer,
    IceCreame: IceCream_Reducer
})

const store = createStore(rootReducers, applyMiddleware(logger));

console.log("InitialState", store.getState());

const unSubscribe = store.subscribe(() => {
    // console.log("UpdatedState", store.getState());
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(CakeFill(3))
// store.dispatch(orderIcecream())
// store.dispatch(orderIcecream())
// store.dispatch(orderIcecream())
// store.dispatch(IcecreamFill(3))


//BindActionCreators
const actions = bindActioncreators(
    {
        orderCake, CakeFill, orderIcecream, IcecreamFill
    },
    store.dispatch
)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.CakeFill(30)
// actions.orderIcecream()
// actions.orderIcecream()
// actions.IcecreamFill(5)

