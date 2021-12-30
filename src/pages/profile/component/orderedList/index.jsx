import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import authServices from '../../../../services/authServices'
import shopService from '../../../../services/shopService'

export default function Ordered() {
  const { user } = useSelector(store => store.user)
  // const[orderList,setOrderList] = useState()
  const [orderList, setOrderList] = useState()
  useEffect(async () => {
    let res = await authServices.getOrderedById(user._id);
    res.success && setOrderList(res.orders)
  }, [])
  const cancleOrder = async(id)=>{
    let res = await authServices.cancleOrderById(id)
    if(res.success) {let res1 = await authServices.getOrderedById(user._id);
      res.success && setOrderList(res1.orders)}
  }
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  return (
    <div id="ordered" className="tab_content-item">
      <div className="row">
        <div className="col-lg-12 mbottom-20">
          <div className="ordered_title mbottom-10">
            <p>Đơn hàng của bạn</p>
          </div>
          <div className="form-group">
            <input type="text" name id className="form-control" placeholder="Tìm theo tên sản phẩm" />
          </div>
        </div>
        {
          orderList && orderList.map((o, i) => (
            <div className="col-lg-12 mbottom-50 shadow">
              <div className="ordered_product flex pad-20">
                {/* <div className="ordered_product-img">
                  <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                </div> */}
                <div className="ordered_product-info flex justify_start">
                  <div className="name">
                    <p><strong>Mã đơn hàng</strong> : <span>{o._id}</span></p>
                  </div>
                  <div className="number">
                    <p><strong>Ngày đặt :</strong> {o.dateOrder}</p>
                  </div>
                </div>
                <div className="ordered_product-money flex justify_end align_center">
                  <p className="txt-orange"> Tổng hoá đơn : {money(o.totalPrice)} </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pad-20">
                  <div className="ordered_status flex justify_start align_center">
                    <p> {o.status} </p>
                  </div>
                </div>
                <div className="col-lg-6 pad-20">

                  <div className="ordered_cancel flex justify_end align_center">
                    <Link to={`/user-profile/order/${o._id}`} className="btn btn-success">Xem chi tiết</Link>
                    {
                      o.status==='Chờ xác nhận' || o.status==='Đã xác nhận'?<div className="btn btn-danger ml-2" onClick={()=>cancleOrder(o._id)}>Hủy đặt hàng</div>:null
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {/* <div className="col-lg-12 mbottom-50 shadow">
          <div className="ordered_product flex pad-20">
            <div className="ordered_product-img">
              <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
            </div>
            <div className="ordered_product-info flex justify_start">
              <div className="name">
                <p>Pate rau củ cho chó</p>
              </div>
              <div className="number">
                <p><strong>Số lượng :</strong> 2</p>
              </div>
            </div>
            <div className="ordered_product-money flex justify_end align_center">
              <p className="txt-orange">$12</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 pad-20">
              <div className="ordered_status flex justify_start align_center">
                <p>Đang giao hàng</p>
              </div>
            </div>
            <div className="col-lg-6 pad-20">
              <div className="ordered_total flex justify_end align_center mbottom-10">
                <p>
                  <i className="fas fa-dollar-sign" />
                  Tổng số tiền :
                </p><p className="total_price">$12</p>
                <p />
              </div>
              <div className="ordered_cancel flex justify_end align_center">
                <div className="btn btn-danger">Hủy đặt hàng</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mbottom-50 shadow">
          <div className="ordered_product flex pad-20">
            <div className="ordered_product-img">
              <img src="./img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
            </div>
            <div className="ordered_product-info flex justify_start">
              <div className="name">
                <p>Pate rau củ cho chó</p>
              </div>
              <div className="number">
                <p><strong>Số lượng :</strong> 2</p>
              </div>
            </div>
            <div className="ordered_product-money flex justify_end align_center">
              <p className="txt-orange">$12</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 pad-20">
              <div className="ordered_status flex justify_start align_center">
                <p>Đang giao hàng</p>
              </div>
            </div>
            <div className="col-lg-6 pad-20">
              <div className="ordered_total flex justify_end align_center mbottom-10">
                <p>
                  <i className="fas fa-dollar-sign" />
                  Tổng số tiền :
                </p><p className="total_price">$12</p>
                <p />
              </div>
              <div className="ordered_cancel flex justify_end align_center">
                <div className="btn btn-danger">Hủy đặt hàng</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
