import axios from "axios"
import { GET_USERS } from "./actionTypes"

export const  getUsersAction=(dispatch)=>{
    axios.get('https://sour-snowy-purpose.glitch.me/users')
    .then((res)=>{
        console.log('res:', res.data)
        dispatch({type:GET_USERS,payload:res.data})
    })
    .catch((err)=>{
        console.log('err:', err)
    })
}