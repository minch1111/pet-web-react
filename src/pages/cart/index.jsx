import React, { useContext, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Context } from '../../App'
import { CHANGE_NUM_BY_KEY, DECREASE_CART, GET_LIST_ORDER, INCREASE_CART, LOAD_NEW_ORDER, REMOVE_ALL_CART, REMOVE_CART, UNCHECKED_ORDER } from '../../store/type'

function Cart() {
  const [list, setList] = useState([])
  let checkAll = useRef()
  const [checkAlll, setCheckAlll] = useState()
  const { listProduct } = useSelector(store => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    // list = []
    dispatch({ type: LOAD_NEW_ORDER, payload: [] })
  }, [])
  const handleSetList = (data) => {
    setList([...list, list.push(data)])
    dispatch({ type: GET_LIST_ORDER, payload: data })
    // setChecked(true)
    //  console.log(list);
  }
  const handleSetListUnchecked = (data) => {

    list.splice(list.indexOf(data), 1)
    console.log(`list`, list)
    checkAll.current.checked = false
    // list.push(data)
    dispatch({ type: UNCHECKED_ORDER, payload: data })
    setCheckAlll(false)
    // setChecked(false)
    // console.log(`List`, list)
  }
  console.log(`list`, list.length)
  // console.log(`listPay`, typeof listPay)
  // console.log(list);
  // const handleSubmit = () => {
  //   dispatch({type:GET_LIST_ORDER,payload:list});
  // }
  const removeAllInCart =()=>{
    dispatch({type:REMOVE_ALL_CART})
  }
  return (
    <main>
      <section className="section">
        <div className="cart">
          <div className="row">
            <div className="col-lg-12 cart_title mbottom-20 txt-center">
              <h1>Giỏ hàng của bạn</h1>
            </div>
            <div className="col-lg-12 mtop-100">
              <div className="row">
                <div className="col-lg-4">
                  <div className="cart_ingredient flex">
                    <p>Sản phẩm</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cart_ingredient flex justify_center">
                    <p>Số lượng</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cart_ingredient flex justify_end">
                    <p>Tổng cộng</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="border" />
                </div>
                <div className="col-lg-12 cart_product mtop-20">
                  <div className="col-lg-4 flex align_center mbottom-20">
                    <div className="check-all">
                      <input type="checkbox" ref={checkAll} onChange={() => { setCheckAlll(checkAll.current.checked) }} />
                    </div>
                    <div className="select">
                      <p>Chọn tất cả</p>
                    </div>
                  </div>
                  <div className="offset-lg-8 mbottom-20" />
                  <div className="row">
                    {
                      listProduct?.map((o, i) => (
                        <CartItem
                          key={i}
                          data={o}
                          // setListPayMent={setListPay()}
                          // listPay={listPay}
                          setlist={(data) => handleSetList(data)}
                          all={checkAlll}
                          setUnchecked={(data) => handleSetListUnchecked(data)}
                        />
                      ))
                    }
                    {/* <CartItem /> */}
                  </div>
                </div>
                <div className="offset-lg-8" />
                <div className="col-lg-4">
                  <div className="btn_group flex justify_evenly">
                    {
                      list.length > 0 ? <Link to="/cart/payment" className="btn btn-primary">
                        Thanh toán
                      </Link> : <Link to="#" className="btn btn-primary"  >
                        Thanh toán
                      </Link>
                    }

                    <div className="btn btn-danger" onClick={removeAllInCart} >
                      Xóa tất cả
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart

export const CartItem = (props) => {
  console.log(`props.data`, props.data)

  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }

  const dispatch = useDispatch()
  let inputRef = useRef()
  let checkItem = useRef()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = props.data.num
    }
  }, [props.data.num])
  useEffect(() => {
    if (props.all === true) {
      checkItem.current.checked = true
      props.setlist(props.data)
      // console.log(`checkItem.current.checked`, checkItem.current.checked)
    }
    else {
      checkItem.current.checked = false
      props.setUnchecked(props.data)
    }
  }, [props.all])

  const handleKeyPress = (ev, data) => {
    if (ev.which === 13) {
      if (props.data.amountStock - inputRef.current.value >= 0) {
        dispatch({ type: CHANGE_NUM_BY_KEY, payload: { o: data, num: ev.currentTarget.value } })
      }
      else{
        alert("Oops, Hiện không đủ số lượng hàng cho bạn đặt 🙀")
      }
    }
  }
  const getNumber =(ev)=>{
    let value = ev.target.value;
    if (props.data.amountStock - inputRef.current.value >= 0) {
        value = parseInt(value)
    }
  }

  // console.log(`formatMoney(20)`, formatMoney(20))
  // console.log(`props.checked`, props.checked)

  return (
    <div className="col-lg-12 mbottom-20">
      <div className="row">
        <div className="col-lg-4 flex">
          <div className="cart_product-info flex">
            <div className="cart_product-info--select flex">
              <input type="checkbox" ref={checkItem} onClick={(ev) => {
                ev.currentTarget.checked === true ?
                  props.setlist(props.data) : props.setUnchecked(props.data)
                // console.log(`${props?.data?.id}`,ev.currentTarget.checked)
              }} />
            </div>
            <div className="cart_product-info--img">
              <img src={props?.data?.imageRepresent[0].url} alt="" />
            </div>
            <div className="cart_product-info--des flex">
              <p> {props?.data?.name} </p>
              <p>Giá : <span> {money(props?.data?.price)}</span></p>
              <p><a href="./productDetail.html"> <i>Xem chi tiết sản
                phẩm</i></a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 flex justify_evenly align_center">
          <div className="cart_product-edit editcart_number">
            <div className="form">
              <button className="btn btn-minus" onClick={() => { dispatch({ type: DECREASE_CART, payload: props.data }) }}>-</button>
              <input  ref={inputRef} onChange={getNumber} className="number" onKeyPress={(ev) => { handleKeyPress(ev, props.data) }} type="number" min={0} />
              <button className="btn btn-plus" onClick={() => { if (props.data.amountStock - inputRef.current.value <= 0) { alert("Oops, Hiện không đủ số lượng hàng cho bạn đặt 🙀") } else { dispatch({ type: INCREASE_CART, payload: props.data }) } }} >+</button>
            </div>
          </div>
          {/* <div className="cart_product-acceptEdit">
            <div className="btn btn-primary" onClick={acceptEdit}>
              Chỉnh sửa
            </div>
          </div> */}
          <div className="cart_product-delete">
            <button className="btn btn-warning" onClick={() => { dispatch({ type: REMOVE_CART, payload: props.data }) }} >
              Xóa khỏi giỏ hàng
            </button>
          </div>
        </div>
        <div className="col-lg-4 flex justify_end align_center">
          <p><strong>{money(props?.data?.num * props?.data?.price)}</strong></p>
        </div>
      </div>
    </div>
  )
}