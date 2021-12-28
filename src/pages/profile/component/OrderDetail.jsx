import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from '../../../assets/img/avatar.png'
import authServices from '../../../services/authServices'
import ReactStar from 'react-rating-stars-component'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useForm from '../../../hooks/useForm'
import { useSelector } from 'react-redux'

export default function OrderDetail() {
  let { slug } = useParams()
  const [detail, setDetail] = useState()
  let arr = []
  let { user } = useSelector(store => store.user)
  useEffect(async () => {
    window.scrollTo(0, 0)
    let res = await authServices.getOrderedDetailByIdOrder(slug)
    res.success && await setDetail(res)
  }, [])
  const handleChange = (e) => {
    console.log(`e`, e)
  }
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  // if (!detail) return <div>Loading</div>
  return (
    <>
      {
        detail ? (
          <div className="ordered-detail p-1" style={{ boxShadow: "0px 0px 5px #8888" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="h4">Chi tiết đơn hàng</div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <h6>Mã Đơn hàng : <span className='font-weight-normal'>{detail.orders._id}</span> </h6>
                    <h6>Khách hàng : <span className='font-weight-normal'>{detail.orders.nameRecieve}</span> </h6>
                    <h6>Địa chỉ giao hàng : <span className='font-weight-normal'>{detail.orders.addressRecieve}</span> </h6>
                    <h6 className='font-weight-bold'>Danh sách sản phẩm chọn mua</h6>
                  </div>
                  {
                    detail.orderdetails.map((o, i) => (
                      <>
                        <ProductOrderedItem
                          key={i}
                          status={detail.orders.status}
                          data={o}
                          idUser={user._id}
                          idOrder={detail.orders._id}
                        />

                      </>
                    ))
                  }
                  <div className="col-lg-12">
                    <div className="flex justify_end align_center">
                      Tổng hoá đơn : {money(detail.orders.totalPrice)}
                    </div>
                  </div>
                  {/* {
                    detail.orders.status === 'Chờ xác nhận' && <div className="col-lg-12 mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="rate flex align_center">
                            Đánh giá :
                            <div>
                              <ReactStar size={30} onChange={handleChange} edit={true} />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          Nội dung đánh giá :
                          <div class="form-group">
                            <label for=""></label>
                            <textarea cols={3} type="text" class="form-control" />
                            <small id="helpId" class="text-muted">Help text</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  } */}
                </div>
              </div>
            </div>
          </div>
        ) :
          (
            <div className="ordered-detail p-1" style={{ boxShadow: "0px 0px 5px #8888" }}>
              <div className="row">
                <div className="col-lg-12">
                  <Skeleton width={300} />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12 mb-2">
                      <h6><Skeleton width={300} /></h6>
                      <h6><Skeleton width={300} /> </h6>
                      <h6><Skeleton width={300} /></h6>
                      <h6 className='font-weight-bold'><Skeleton width={250} /></h6>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-3">
                          <Skeleton
                            height={100} />
                        </div>
                        <div className="col-lg-6">
                          <Skeleton width={150} />
                          <Skeleton width={100} />
                        </div>
                        <div className="col-lg-3">
                          <Skeleton width={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-3">
                          <Skeleton
                            height={100} />
                        </div>
                        <div className="col-lg-6">
                          <Skeleton width={150} />
                          <Skeleton width={100} />
                        </div>
                        <div className="col-lg-3">
                          <Skeleton width={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="flex justify_end align_center">
                        <Skeleton />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-3">
                      <div className="rate flex align_center">
                        {/* Đánh giá : */}
                        <div>
                          <Skeleton width={100} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )
      }

    </>
  )
}

export const ProductOrderedItem = (props) => {
  console.log(`props`, props)
  const [rate, setRate] = useState(true)
  let { form, error, handleSubmit, register, setForm } = useForm({ idOrder: props.idOrder, idUser: props.idUser, idProduct: props.data.idProducts, rateContent: "" })
  // console.log(`form`, form)
  const submit = async () => {
    console.log(`form`, form)
    let res = await authServices.sendFeedBack(props.idUser, form);
    res.success && setRate(false)
  }
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  // console.log(`rate`, rate)
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3">
            <img src={props.data.imageProduct} alt="" />
          </div>
          <div className="col-lg-6">
            <p> {props.data.product} </p>
            <p>Số lượng : {props.data.amount} </p>
          </div>
          <div className="col-lg-3">
            Giá : {money(props.data.price)}
          </div>
        </div>
      </div>
      {
        // props.status !== 'Chờ xác nhận' &&
        (rate === true && props.data.status === "Chưa đánh giá" ?
          // props.status === 'Chờ xác nhận' &&
          (
            <form onSubmit={handleSubmit(submit)} className="col-lg-12 mb-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rate flex align_center">
                    Đánh giá :
                    <div>
                      <ReactStar size={30} onChange={(e) => { setForm({ ...form, rateNumber: e }) }} edit={rate} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  Nội dung đánh giá :
                  <div class="form-group">
                    <label for=""></label>
                    <textarea cols={3} type="text" class="form-control" disabled={!rate} onChange={e => { setForm({ ...form, rateContent: e.target.value }) }} />
                    <small id="helpId" class="text-muted">Help text</small>
                  </div>
                </div>
                <div className="col-lg-12 mt-1">
                  <button type='submit' className='btn btn-success'> Đánh giá </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="col-lg-12 mb-3">
              <div className="row">
                <div className="col-lg-12 mt-1">
                  Đánh giá : <ReactStar value={form.rateNumber} size={25} edit={false} />
                </div>
                <div className="col-lg-12">
                  Nội dung : {form.rateContent}
                </div>
              </div>
            </div>
          )
        )

      }
    </>
  )
}
