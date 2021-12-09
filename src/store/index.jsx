import {combineReducers,createStore} from 'redux'
import { cartReducer } from './reducer/cartReducer'
import { listOrderReducer } from './reducer/listOrderReducer'

const reducer=combineReducers({
    cart:cartReducer,
    listOrder:listOrderReducer
})

const store = createStore(reducer)

export default store