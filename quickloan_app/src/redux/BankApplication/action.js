import axios from "axios"
import { ALL_USER_ERROR, ALL_USER_REQUEST, ALL_USER_SUCCESS, BANK_DATA_ERROR, BANK_DATA_REQUEST, BANK_DATA_SUCCESS, CURRENT_USER_SUCCESS, GET_LOAN_DATA_ERROR, GET_LOAN_DATA_REQUEST, GET_LOAN_DATA_SUCCESS, LOAN_DATA_ERROR, LOAN_DATA_REQUEST, LOAN_DATA_SUCCESS } from "./actionTypes"

export const handleLoanDataSubmit = (id, loans, userInfo) => (dispatch) => {
    dispatch({ type: LOAN_DATA_REQUEST })
  return axios.patch(`https://sour-snowy-purpose.glitch.me/users/${id}`, { loans: [...loans, userInfo] })
        .then((res) => {
            dispatch({ type: LOAN_DATA_SUCCESS, payload: res.data.loans })
            console.log(res.data.loans)
        })
        .catch((err) => {
            dispatch({ type: LOAN_DATA_ERROR })
        })
}

export const getLoanData = (id) => (dispatch) => {

    dispatch({ type: GET_LOAN_DATA_REQUEST })
     axios.get(`https://sour-snowy-purpose.glitch.me/users/${id}`)
        .then((res) => {
            dispatch({ type: GET_LOAN_DATA_SUCCESS, payload: res.data.loans })
            console.log("here", res.data.loans)
        })
        .catch((err) => {
            dispatch({ type: GET_LOAN_DATA_ERROR })
        })
}


export const getAllUsers = () => async (dispatch) => {

    dispatch({ type: ALL_USER_REQUEST })
    return axios.get(`https://sour-snowy-purpose.glitch.me/users`).then((res) => {
        // console.log(res)
        dispatch({ type: ALL_USER_SUCCESS, payload: res.data })

    }).catch((err) => {
        dispatch({ type: ALL_USER_ERROR })
    })
}

export const getCurrentUser = (id) =>(dispatch) => {

    dispatch({ type: ALL_USER_REQUEST })
     axios.get(`https://sour-snowy-purpose.glitch.me/users/${id}`).then((res) => {

        // const user = res.data.find((el) => el.id === id);
        // if (user) {
        dispatch({ type: CURRENT_USER_SUCCESS, payload: res.data });
        console.log("User found:", res.data)

    }).catch((err) => {
        dispatch({ type: ALL_USER_ERROR })
    })
}

export const getBankData = (id) => (dispatch) => {

    dispatch({ type: BANK_DATA_REQUEST })
     axios.get(`https://sour-snowy-purpose.glitch.me/banks/${id}`).then((res) => {
        console.log("Bank by id", res.data)
        dispatch({ type: BANK_DATA_SUCCESS, payload: res.data })

    }).catch((err) => {
        dispatch({ type: BANK_DATA_ERROR })
    })
}