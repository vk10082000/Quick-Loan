import { DELETE_PRODUCT_SUCCSES, GET_PRODUCT_SUCCSES, PATCH_PRODUCT_SUCCSES, POST_PRODUCT_SUCCSES, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontypes";

const intialstate = {
    products: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case GET_PRODUCT_SUCCSES:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isError: false
            }
        case PATCH_PRODUCT_SUCCSES:
            return {
                ...state,

                isLoading: false,
                isError: false
            }
        case DELETE_PRODUCT_SUCCSES:
            return {
                ...state,

                isLoading: false,
                isError: false
            }
        case POST_PRODUCT_SUCCSES:
            return {
                ...state,
                isLoading: false,
                isError: false
            }

        default:
            return state
    }
}