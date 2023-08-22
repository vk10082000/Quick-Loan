import {applyMiddleware, combineReducers, legacy_createStore,} from "redux"
import thunk from "redux-thunk"
const rootreducer = combineReducers({})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))