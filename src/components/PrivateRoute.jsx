import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router';
import {Context} from '../App'

function PrivateRoute(props) {
    let {user} = useSelector(store=>store.user)

    if(!user) return <Redirect to="/" />

    return <Route {...props}/>
}

export default PrivateRoute