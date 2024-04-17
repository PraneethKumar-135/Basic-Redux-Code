import store from "./store";
import { Submit } from "./slice";

console.log("initialStat", store.getState());

const data = {
    id: 1,
    firstname: 'df',
    lastname: 'adf',
    email: 'adf',
    salary: 'adf',
    date: 'adf'
}
store.dispatch(Submit(data))

