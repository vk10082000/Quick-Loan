import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionType';


export const signup = (formData) => async (dispatch) => {

    dispatch({ type: SIGNUP_REQUEST });

    return axios.post('https://sour-snowy-purpose.glitch.me/users', formData).then((res) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        return res.data
    }).catch((err) => {

        dispatch({ type: SIGNUP_FAILURE })
    })

}
export const login = (loginData) => async (dispatch) => {


    dispatch({ type: LOGIN_REQUEST});
  
    try {
      const res = await axios.get(`https://sour-snowy-purpose.glitch.me/users`);
  
      const user = res.data.find((el) => el.email === loginData.email && el.password === loginData.password);
  
      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        console.log("User found:", user);
        return true;
      } else {
        dispatch({ type: LOGIN_FAILURE });
        return false;
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
  