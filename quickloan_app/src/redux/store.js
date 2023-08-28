import {applyMiddleware, combineReducers, legacy_createStore,} from "redux"
import thunk from "redux-thunk"
import {reducer as ProductReducer} from "./ProductRedux/reducer"
import {reducer as AuthReducer} from "./Authentication/reducer"
import {adminReducer} from "./AdminRedux/adminReducer"
import { reducer as bankApplicationReducer } from "./BankApplication/reducer";
const rootreducer = combineReducers({ProductReducer,AuthReducer,adminReducer,bankApplicationReducer})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))