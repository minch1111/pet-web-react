import api from "../config/api"

const authServices={
  login(form){
    return fetch(`${api}/auth/user/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(res=>res.json())
  },
  register(form){
    return fetch(`${api}/auth/user/register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(res=>res.json())
  },
  updateInfoUser(id,form){
    return fetch(`${api}/customer/account/update/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(res=>res.json())
  },
  getOrderedById(id){
    return fetch(`${api}/order/user/all/${id}`).then(res=>res.json())
  },
  getOrderedDetailByIdOrder(id){
    return fetch(`${api}/order/user/detail/${id}`).then(res=>res.json())
  },
  sendFeedBack(id,form){
    return fetch(`${api}/rate/${id}`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(res=>res.json())
  },

}

export default authServices