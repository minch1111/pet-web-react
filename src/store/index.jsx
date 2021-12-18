import {combineReducers,createStore} from 'redux'
import authServices from '../services/authServices'
import { authReducer } from './reducer/authReducer'
import { cartReducer } from './reducer/cartReducer'
import { listOrderReducer } from './reducer/listOrderReducer'

const reducer=combineReducers({
    cart:cartReducer,
    listOrder:listOrderReducer,
    user:authReducer
})

const store = createStore(reducer)

export default store