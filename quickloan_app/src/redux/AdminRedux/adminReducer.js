import { GET_USERS, REQ_GET_USERS } from "./actionTypes"

const initState={
    users:[],
    loading:''
}
export const adminReducer=(state=initState,{type,payload})=>{
    switch(type){
        case REQ_GET_USERS:{
            return {...state,loading:true}
        }
        case GET_USERS:{
            return {...state,users:payload,loading:false}
        }
        default: 
            return state
    }
}