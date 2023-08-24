import {applyMiddleware, combineReducers, legacy_createStore,} from "redux"
import thunk from "redux-thunk"
import {reducer as ProductReducer} from "./ProductRedux/reducer"
import {reducer as AuthReducer} from "./Authentication/reducer"
const rootreducer = combineReducers({
    ProductReducer,
    AuthReducer
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))