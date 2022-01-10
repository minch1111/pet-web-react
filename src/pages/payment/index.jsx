import React, { useEffect, useRef, useState } from 'react'
// import ProductPayment from './component/ProductPayment'
// import PaymentForm from './component/PaymentForm'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import useForm from '../../hooks/useForm'
import { REMOVE_WHEN_PAY } from '../../store/type'
import shopService from '../../services/shopService'
import paymentServices from '../../services/paymentServices'
import { useHistory } from 'react-router-dom'
import NotificationAlert from 'react-notification-alert'

function Payment() {
  const [vouchers, setVouchers] = useState()
  const [discount, setDiscount] = useState()
  const [confirm, setConfirm] = useState(false)
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  let path = `/`;
  let history = useHistory();
  const ship = 30000;
  const client = {
    sandbox:
      "AbCbIrIByizgESF1M7PsdNIXk7dN_T7YYJ-H4JMLy2YEx-7uwRhV-vOt5kd0IFjHujvbufaDvBo1mhmf",
    production: "aaa"
  };
  let notify = useRef()
  var options = {};
  options = {
      place: 'tr',
      message: (
          <div>
             ⚡ Đặt hàng thành công ⚡ <br/>
              😻😻 PETPARADISE rất cảm ơn quý khách 😻😻
          </div>
      ),
      type: "success",
      // icon: 'fas fa-user',
      autoDismiss: 3,
      closeButton: false
  }
  const { listOrder } = useSelector(store => store.listOrder)
  const calTotal = () => {
    let total = 0
    listOrder?.forEach(element => {
      total = total + element.num * element.price
    });
    return total >= 500000 ? total : total + 30000
  }
  //  Hàm gửi Back End
  const calTotalPrice = (voucher) => {
    let total = 0
    listOrder?.forEach(element => {
      total = total + element.num * element.price
    });
    // console.log(`total`, total)
    // console.log(`voucher`, voucher)
    if (voucher) {
      return total >= 500000 ? (total - total * voucher / 100) : (total - total * voucher / 100) + ship
    }
    return total >= 500000 ? total : total + ship
  }
  // calTotal()

  let { form, error, handleSubmit, register, setForm } = useForm()
  //  console.log("render")
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  // let usd

  const accept = () => {
    setConfirm(true)
    // usd=transVNDtoUSD(form.totalPrice)
  }
  const submit = async () => {
    // console.log('click');
    // console.log(`form`, form)
    // setConfirm(true)
    let res = await paymentServices.confirmPay(form);
    if (res.success) {
      // alert('⚡ Đặt hàng thành công ⚡ \n 😻😻 PETPARADISE rất cảm ơn quý khách 😻😻')
      notify.current.notificationAlert(options)
      dispatch({ type: REMOVE_WHEN_PAY, payload: listOrder })
      setTimeout(()=>{
        history.push(path);
      },1500)

    }
    // //
  }
  // console.log(`error`, error)
  // Hàm hiển thị
  const displayTotal = (discountt) => {
    let total = 0
    listOrder?.forEach(element => {
      total = total + element.num * element.price
    });
    // console.log(`discount`, discount)
    discountt = discount
    if (discountt) {
      return (total - ((total * discountt) / 100))
    }
    else {
      return total
    }
  }

  useEffect(async () => {
    let res = await shopService.getVoucher();
    if (res.success) {
      let listVoucherCondition = []
      res.vouchers.forEach(element => {
        if (element.condition <= calTotal()) {
          listVoucherCondition.push(element)
        }
      })
      await setVouchers(listVoucherCondition)
    }
    setForm({ ...form, id: user._id, name: user.name, phone: user.phone, address: user.address, email: user.email, voucher: "", payments: false, listOrder, totalPrice: calTotal() })
  }, [])
  const handleChangeVoucher = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    // console.log(`ev`, ev.target.value)
    setForm({
      ...form,
      [name]: value
    })
    let index = vouchers.findIndex(i => i.name === value)
    setDiscount(vouchers[index]?.discount)
  }
  useEffect(() => {
    // console.log("effect tính tổng")
    setForm({ ...form, totalPrice: calTotalPrice(discount) })
  }, [discount])

  // let disableInput= useRef()

  const choosePay = (a) => {
    let check = a.target.checked
    setForm({ ...form, payments: check })
  }

  // console.log(`form`, form.totalPrice)

  return (
    <main>
      <NotificationAlert  ref={notify}/>
      <section className="section">
        <div className="payment">
          <div className="payment_title pad-10">
            <div className="row">
              <div className="offset-lg-1" />
              <div className="col-lg-10 border-bottom-1">
                <div className="title">
                  <p>Thanh toán</p>
                </div>
              </div>
              <div className="offset-lg-1" />
            </div>
          </div>
          <div className="payment_content">
            <div className="row">
              <div className="offset-lg-1" />
              <div className="col-lg-10">
                <div className="row">
                  {/* Product Payment Infomation */}
                  <div className="col-lg-6">
                    <div className="payment_content-detail">
                      <div className="row">
                        <div className="col-lg-12 mbottom-20">
                          <div className="content_title fontsz-25 fontw-500">
                            <p>Đơn hàng của bạn</p>
                          </div>
                        </div>
                        <div className="col-lg-12 mbottom-10">
                          <div className="content-detail--title fontsz-20 fontw-500">
                            Sản phẩm của bạn
                          </div>
                        </div>
                        <div className="row mbottom-50">
                          {
                            listOrder?.map((o, i) => (
                              <ProductOrdered
                                key={i}
                                data={o}
                              />
                            ))
                          }
                        </div>
                        <div className="col-lg-12 mbottom-50">
                          <div className="content-title--price">
                            <div className="price_total fontw-500 fontsz-17">
                              <p>Tổng tiền sản phẩm : <span> {money(calTotal() - 30000)} </span></p>
                            </div>
                            <div className="price_shipping fontw-500 fontsz-17">
                              <p>
                                Phí vận chuyển{
                                  calTotal() > 500000 ? <span className='line-through'> {money(ship)} </span> : <span>{money(ship)}</span>
                                }

                              </p>
                            </div>
                            <div className="price_totalbill fontw-500 fontsz-17">
                              <p>Tổng tiền hoá đơn : <span> {calTotal() > 500000 ? money(displayTotal()) : money(displayTotal() + ship)}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Form Payment */}
                  <div className="col-lg-6 border-2-solid">
                    <div className="payment_content-form">
                      <div className="row">
                        <div className="col-lg-12 mbottom-20">
                          <div className="content_title fontsz-25 fontw-500">
                            <p>Thông tin thanh toán</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <form onSubmit={handleSubmit(accept)} className="content-form-detail pad-20">
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" >Họ &amp; Tên</label>
                              <input type="text" disabled={confirm && true} {...register('name', { required: true })} className="form-control" placeholder="Nhập tên" />
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17">Số điện thoại</label>
                              <input type="text" disabled={confirm && true} {...register('phone', { required: true })} className="form-control" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17">Địa chỉ nhận
                                hàng</label>
                              <input type="text" disabled={confirm && true} {...register('address', { required: true })} className="form-control" placeholder="Nhập địa chỉ" />
                              {
                                error.address && <small className='text-danger'> {error.address} </small>
                              }
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" >Chọn mã
                                khuyến mãi của bạn</label>
                              <select disabled={confirm && true} className="custom-select" name="voucher" onChange={handleChangeVoucher}>
                                <option value="">Chọn một trong các mã khuyến mãi</option>
                                {
                                  vouchers?.map((o, i) => (
                                    <option value={o.name} key={i}>{o.title} , giảm {o.discount} %  </option>
                                  ))
                                }
                                {/* <option value={1}>Khuyến mãi 20% tổng hoá đơn</option>
                                <option value={2}>Khuyến mãi 50k tổng hoá đơn</option> */}
                                {/* <option value={3}></option> */}
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17">Ghi chú</label>
                              <textarea disabled={confirm && true} className="form-control" {...register('note')} id="note" rows={3} placeholder="Ghi chú..." />
                            </div>
                            {
                              !confirm && <div className="col-lg-12">
                                <div className="content-title--btn flex justify_evenly align_center">
                                  <button type="submit" className="btn btn-primary">
                                    Xác nhận
                                  </button>
                                  <Link to="/cart" className="btn btn-danger">
                                    Hủy
                                  </Link>
                                </div>
                              </div>
                            }

                          </form>
                          {
                            confirm && <div className="col-lg-12 mb-3">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input" onChange={choosePay} name="" id="" />
                                  Phương thức thanh toán Online (Paypal)
                                </label>
                              </div>
                              <br />
                              <div className="content-title--btn flex justify_evenly align_center">
                                {
                                  form.payments === true ?
                                    <PaypalExpressBtn
                                      client={client}
                                      currency={"USD"}
                                      total={form.totalPrice * 4403 / 100000}
                                      // total={12}
                                      onSuccess={(ev) => {
                                        console.log(`ev.paid`, ev.paid);
                                        if (ev.paid === true) { submit(); }
                                      }}
                                    >
                                    </PaypalExpressBtn> : <button onClick={() => { submit() }} className="btn btn-primary">
                                      Đặt hàng
                                    </button>
                                }
                                <Link to="/cart" className="btn btn-danger">
                                  Hủy
                                </Link>
                              </div>
                            </div>
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-lg-1" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Payment

export const ProductOrdered = ({ data }) => {
  // console.log(`data`, data)
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  return (
    <div className="col-lg-12 mbottom-20">
      <div className="content-title--product flex align_center">
        <div className="product_img">
          <img src={data?.imageRepresent[0]?.url} alt="" />
        </div>
        <div className="product_des pad-20">
          <div className="product_des-name fontw-500">
            <p>Tên sản phẩm : <span className="fontsz-20 txt-orange"> {data?.name} </span></p>
          </div>
          <div className="product_des-price fontw-500">
            <p>Giá : <span className="fontsz-20 txt-orange"> {money(data.price)} </span>
            </p>
          </div>
          <div className="product_des-number fontw-500">
            <p>Số lượng : <span className="fontsz-20 txt-orange"> {data?.num} </span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
