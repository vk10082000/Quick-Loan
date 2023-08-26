import { GET_USERS } from "./actionTypes"

const initState={
    users:''
}
export const adminReducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_USERS:{
            return {...state,users:payload}
        }
        default: 
            return state
    }
}