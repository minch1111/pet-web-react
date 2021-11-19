import React, { useContext, useState ,useEffect} from 'react'
import { Context } from '../../App'

function Cart() {

  const { user, setDataInCart, removeProductInCart } = useContext(Context);
  const [cartNumber, setCartNumber] = useState({number:user?.cart?.number})

  const inCrease = ()=>{
    setCartNumber({number:cartNumber.number+1})
  }
  const deCrease = ()=>{
    setCartNumber({number:cartNumber.number-1})
  }
  const onChangeEdit =(ev)=>{
    let value = parseInt(ev.currentTarget.value);
    setCartNumber({number:value})
  }
  const acceptEdit = ()=>{
    setDataInCart(cartNumber.number)
  }
  const removeProduct =()=>{
    removeProductInCart()
  }
  
  useEffect(() => {
   console.log(`cartNumber.number`, cartNumber.number)
  }, [cartNumber.number])
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
                      <input type="checkbox" />
                    </div>
                    <div className="select">
                      <p>Chọn tất cả</p>
                    </div>
                  </div>
                  <div className="offset-lg-8 mbottom-20" />
                  <div className="row">
                    {
                      typeof user?.cart?.number !== 'undefined' && (
                        <div className="col-lg-12 mbottom-20">
                          <div className="row">
                            <div className="col-lg-4 flex">
                              <div className="cart_product-info flex">
                                <div className="cart_product-info--select flex">
                                  <input type="checkbox" />
                                </div>
                                <div className="cart_product-info--img">
                                  <img src="./img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                                </div>
                                <div className="cart_product-info--des flex">
                                  <p> {user.cart?.product?.name} </p>
                                  <p>Giá : <span>${user.cart?.product?.price} </span></p>
                                  <p><a href="./productDetail.html"> <i>Xem chi tiết sản
                                    phẩm</i></a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 flex justify_evenly align_center">
                              <div className="cart_product-edit editcart_number">
                                <div className="form">
                                  <button type="submit" onClick={deCrease} className="btn btn-minus">-</button>
                                  <input type="text" onChange={onChangeEdit} className="number" value={cartNumber.number} />
                                  <button type="submit" onClick={inCrease} className="btn btn-plus">+</button>
                                </div>
                              </div>
                              <div className="cart_product-acceptEdit">
                                <div className="btn btn-primary" onClick={acceptEdit}>
                                  Chỉnh sửa
                                </div>
                              </div>
                              <div className="cart_product-delete">
                                <div className="btn btn-warning" onClick={removeProduct}>
                                  Xóa khỏi giỏ hàng
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 flex justify_end align_center">
                              <p><strong>${user.cart?.product?.price * user?.cart?.number}</strong></p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="offset-lg-8" />
                <div className="col-lg-4">
                  <div className="btn_group flex justify_evenly">
                    <div className="btn btn-primary">
                      Thanh toán
                    </div>
                    <div className="btn btn-danger">
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
