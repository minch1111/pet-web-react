import { ADD_TO_CART, CHANGE_NUM_BY_KEY, DECREASE_CART, INCREASE_CART, REMOVE_CART, REMOVE_WHEN_PAY } from "../type"

const initialState = {
    listProduct: JSON.parse(localStorage.getItem('cart')) || []
}

export const cartReducer = (state = initialState, action) => {
    let { listProduct } = state
    switch (action.type) {
        case ADD_TO_CART:
            let checkInCart = listProduct.find(e =>
                e._id === action.payload.o._id
            )
            // console.log(`action.payload`, action.payload)
            if (checkInCart) {
                let index = listProduct.findIndex((it) =>
                    it._id === action.payload.o._id
                )
                listProduct[index].num = action.payload.num
            }
            else {
                listProduct.push({ ...action.payload.o, num: action.payload.num })
            }
            // console.log(`listProduct`, listProduct)
            localStorage.setItem('cart', JSON.stringify(listProduct));
            return {
                ...state,
                listProduct
            }
        case INCREASE_CART:
            let index = listProduct.findIndex(it =>
                it._id === action.payload._id)
            listProduct[index].num += 1
            localStorage.setItem('cart', JSON.stringify(listProduct))
            return {
                ...state,
                listProduct
            }
        case DECREASE_CART:
            let indexx = listProduct.findIndex(it => it._id === action.payload._id)
            if (listProduct[indexx].num > 1) listProduct[indexx].num -= 1
            else listProduct.splice(indexx,1)
            localStorage.setItem('cart',JSON.stringify(listProduct))
            return{
                ...state,
                listProduct
            }
        case CHANGE_NUM_BY_KEY:
            console.log(`action.payload`, action.payload)
            let indexxx = listProduct.findIndex(it=>it._id===action.payload.o._id)
            listProduct[indexxx].num = parseInt(action.payload.num)
            localStorage.setItem('cart',JSON.stringify(listProduct))
            return{
                ...state,
                listProduct
            }
        case REMOVE_CART:
            let indexxxx = listProduct.findIndex(it=>it._id ===action.payload._id)
            listProduct.splice(indexxxx,1)
            localStorage.setItem('cart',JSON.stringify(listProduct))
            return{
                ...state,
                listProduct
            }
        case REMOVE_WHEN_PAY:
            let listProductToPay = listProduct
            // arrray gio hang
            console.log(`listProductToPay`, listProductToPay)
            // array thanh toan
            console.log(`action.payload`, action.payload)

            // tam
            let listTemp=[]
            for(let i =0;i<listProductToPay.length;i++)
            {
                let bool = false
                for(let j =0;j<action.payload.length;j++)
                {
                    if(listProductToPay[i]._id === action.payload[j]._id){
                        bool =true
                    }
                }
                if(!bool){
                    listTemp.push(listProductToPay[i])
                }
            }
            console.log(`listTemp`, listTemp)
            listProduct = listTemp
            localStorage.setItem('cart',JSON.stringify(listProduct))
            // console.log(`listProductToPay`, listProductToPay)
            return{
                ...state,
                listProduct
            }
    }
    return state
}