import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType"

const initialState = {
  isLoading: false,
  isAuth: false,
  user: [],
  isError: false,
  currentUser: {}
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: [...state.user, payload],
        isAuth: false,

      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        currentUser: payload
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false
      }
    }


    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false
      }
    }

    default: {
      return state
    }
  }
}

