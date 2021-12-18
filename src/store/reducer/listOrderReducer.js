// import { Redirect } from "react-router"
import { GET_LIST_ORDER, LOAD_NEW_ORDER, UNCHECKED_ORDER } from "../type"

const initialState = {
    listOrder: JSON.parse(localStorage.getItem('listOrder')) || []
}


export const listOrderReducer = (state = initialState, action) => {
    let { listOrder } = state
    switch (action.type) {
        case LOAD_NEW_ORDER:
            listOrder = action.payload
            localStorage.setItem('listOrder', JSON.stringify(listOrder));
            return {
                ...state,
                listOrder
            }
        case GET_LIST_ORDER:
            // console.log(`listOrder`, listOrder)
            // console.log(`action.payload`, action.payload)
            listOrder.push(action.payload)
            // console.log(`listOrder`, listOrder)
            localStorage.setItem('listOrder', JSON.stringify(listOrder));
            // <Redirect to="/cart/payment" />
            return {
                ...state,
                listOrder
            }
        case UNCHECKED_ORDER:
            listOrder.splice(listOrder.indexOf(action.payload), 1)
            localStorage.setItem('listOrder', JSON.stringify(listOrder));
            // <Redirect to="/cart/payment" />
            return {
                ...state,
                listOrder
            }
    }
    return state
}