import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const isAuth = useSelector(store => store.AuthReducer.isAuth)
    console.log("isAuth", isAuth)
    const loaction = useLocation()

    return (
        <>
            {
                isAuth ? children : <Navigate to="/login" state={loaction.pathname} replace={true} />
            }
        </>
    )
}
