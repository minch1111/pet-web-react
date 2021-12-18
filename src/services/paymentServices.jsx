import api from "../config/api"

const paymentServices ={
  confirmPay(form){
    return fetch (`${api}/order/user/store`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(res=>res.json())
  }
}

export default paymentServices