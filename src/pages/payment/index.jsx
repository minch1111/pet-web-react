import React from 'react'
import ProductPayment from './component/ProductPayment'
import PaymentForm from './component/PaymentForm'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Payment() {

  const { listOrder } = useSelector(store => store.listOrder)

  console.log(`listOrder`, listOrder)
  let total = 0
  const calTotal = () => {
    listOrder?.forEach(element => {
      total = total + element.num * element.price
    });
  }
  calTotal()
  const money = (a) => {
    return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  return (
    <main>
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
                <form className="row">
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
                          {/* <div className="col-lg-12 mbottom-20">
                            <div className="content-title--product flex align_center">
                              <div className="product_img">
                                <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                              </div>
                              <div className="product_des pad-20">
                                <div className="product_des-name fontw-500">
                                  <p>Tên sản phẩm : <span className="fontsz-20 txt-orange">Pate heo rau củ cho
                                    chó</span></p>
                                </div>
                                <div className="product_des-price fontw-500">
                                  <p>Giá : <span className="fontsz-20 txt-orange">$12</span>
                                  </p>
                                </div>
                                <div className="product_des-number fontw-500">
                                  <p>Số lượng : <span className="fontsz-20 txt-orange">2</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mbottom-20">
                            <div className="content-title--product flex align_center">
                              <div className="product_img">
                                <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                              </div>
                              <div className="product_des pad-20">
                                <div className="product_des-name fontw-500">
                                  <p>Tên sản phẩm : <span className="fontsz-20 txt-orange">Pate bò rau củ cho
                                    chó</span></p>
                                </div>
                                <div className="product_des-price fontw-500">
                                  <p>Giá : <span className="fontsz-20 txt-orange">$12</span>
                                  </p>
                                </div>
                                <div className="product_des-number fontw-500">
                                  <p>Số lượng : <span className="fontsz-20 txt-orange">2</span></p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-lg-12 mbottom-50">
                          <div className="content-title--price">
                            <div className="price_total fontw-500 fontsz-17">
                              <p>Tổng tiền sản phẩm : <span> {money(total)} </span></p>
                            </div>
                            <div className="price_shipping fontw-500 fontsz-17">
                              <p>Phí vận chuyển <span>$.$$</span></p>
                            </div>
                            <div className="price_totalbill fontw-500 fontsz-17">
                              <p>Tổng tiền hoá đơn : <span>$.$$</span></p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-lg-12">
                          <div className="content-title--btn flex justify_evenly align_center">
                            <button type="submit" className="btn btn-primary">
                              Đặt hàng
                            </button>
                            <Link to="/" className="btn btn-danger">
                              Hủy
                            </Link>
                          </div>
                        </div> */}
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
                          <div className="content-form-detail pad-20">
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" htmlFor="name">Họ &amp; Tên</label>
                              <input type="text" name="name" id="name" className="form-control" defaultValue="Nguyễn Văn A" placeholder="Nhập tên" />
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" htmlFor="phone">Số điện thoại</label>
                              <input type="number" name="phone" id="phone" className="form-control" defaultValue={90909} placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" htmlFor="address">Địa chỉ nhận
                                hàng</label>
                              <input type="text" name="phone" id="phone" className="form-control" defaultValue="90 Nguyễn Văn Trỗi Phường 6 Quận 3 TPHCM" placeholder="Nhập địa chỉ" />
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" htmlFor="inputGroupSelect01">Chọn mã
                                khuyến mãi của bạn</label>
                              <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Chọn một trong các mã khuyến mãi</option>
                                <option value={1}>Khuyến mãi 20% tổng hoá đơn</option>
                                <option value={2}>Khuyến mãi 50k tổng hoá đơn</option>
                                {/* <option value={3}></option> */}
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="fontw-500 fontsz-17" htmlFor="note">Ghi chú</label>
                              <textarea className="form-control" name="note" id="note" rows={3} placeholder="Ghi chú..." defaultValue={""} />
                            </div>
                            <div className="col-lg-12">
                              <div className="content-title--btn flex justify_evenly align_center">
                                <button type="submit" className="btn btn-primary">
                                  Đặt hàng
                                </button>
                                <Link to="/cart" className="btn btn-danger">
                                  Hủy
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
  console.log(`data`, data)
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
