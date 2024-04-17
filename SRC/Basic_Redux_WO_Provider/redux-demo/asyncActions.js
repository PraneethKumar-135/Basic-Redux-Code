const redux = require('redux')
const createStore = redux.createStore


const InitialState = {
    Loading: false,
    Users: [],
    error: ''
}

const Fetch_Users_Request = "Fetch_Users_Request"
const Fetch_Users_Succeeded = "Fetch_Users_Succeeded"
const Fetch_Users_Failed = "Fetch_Users_Failed"


const FetchUsersRequest = () => {
    return {
        type: Fetch_Users_Request,
    }
}
const FetchUsersSucceeded = (users) => {
    return {
        type: Fetch_Users_Succeeded,
        payload: users,
    }
}
const FetchUsersFailed = (error) => {
    return {
        type: Fetch_Users_Succeeded,
        payload: error,
    }
}



const reducers = (state = InitialState, action) => {
    switch (action.type) {
        case Fetch_Users_Request:
            return {
                ...state,
                Loading: true,
            }
        case Fetch_Users_Succeeded:
            return {
                Loading: false,
                Users: action.payload,
                error: ''
            }
        case Fetch_Users_Failed:
            return {
                Loading: false,
                Users: [],
                error: action.payload
            }

        default:
            break;
    }
}

const store = createStore(reducers);