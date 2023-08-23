import {applyMiddleware, combineReducers, legacy_createStore,} from "redux"
import thunk from "redux-thunk"
import {reducer as ProductReducer} from "./ProductRedux/reducer"
const rootreducer = combineReducers({
    ProductReducer
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))