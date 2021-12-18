import { LOGIN_SUCCESS, LOGOUT } from "../type"

const initialState = {
  user:JSON.parse(localStorage.getItem("loginCustomer")),
  wishList: JSON.parse(localStorage.getItem('wishList')) || []
}
export const authReducer =(state=initialState,action)=>{
  switch(action.type){
    case LOGIN_SUCCESS:
      localStorage.setItem('loginCustomer',JSON.stringify(action.payload));
      // localStorage.setItem('token')
      return {
        ...state,
        user:action.payload
      }
    case LOGOUT:
      localStorage.removeItem('loginCustomer')
      return{
        ...state,
        user:localStorage.getItem('loginCustomer')
      }
  }
  return state
}