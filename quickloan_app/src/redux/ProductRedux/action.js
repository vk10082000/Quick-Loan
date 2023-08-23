import { DELETE_PRODUCT_SUCCSES, GET_PRODUCT_SUCCSES, POST_PRODUCT_SUCCSES, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontypes"
import axios from 'axios'



export const getPosts = (dispatch) => {

    dispatch({ type: PRODUCT_REQUEST })

    axios.get(`http://localhost:8080/banks`).then((res) => {

        dispatch({ type: GET_PRODUCT_SUCCSES, payload: res.data })

    }).catch((err) => {
        dispatch({ type: PRODUCT_FAILURE })
    })

}
export const postData = (newdata) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.post(`http://localhost:8080/banks`, newdata).then((res) => {
        //console.log(res.data);
        dispatch({ type: POST_PRODUCT_SUCCSES })
    }).catch((err) => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}
export const Deletedata = (id) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    return axios.delete(`http://localhost:8080/banks/${id}`).then((res) => {
        //console.log(res.data);
        dispatch({ type: DELETE_PRODUCT_SUCCSES })

    }).catch((err) => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}