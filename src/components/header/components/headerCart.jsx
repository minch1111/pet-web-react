import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Context } from '../../../App'
import img from '../../../assets/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png'

export default function HeaderCart() {

    // const { user } = useContext(Context);
    const { listProduct } = useSelector(store => store.cart)

    // var i = 0
    // function numPro() {
    //     user?.cart?.forEach(element => {
    //         i = i + element?.number
    //     });
    // }
    // numPro()
    // console.log(`i`, i)



    // console.log(`data.cart`, user?.cart)
    // console.log(`listProduct`, listProduct)
    const money = (a) => {
        return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }
    return (
        <div className="header_main-cart after hover_cart">
            <div className="cart">
                <i className="fas fa-shopping-cart" />
            </div>
            <div className="cart_number">
                <span> {listProduct?.length}</span>
            </div>
            <div className="hover_cart-content">
                <div className="title txt-center fontw-700">GIỎ HÀNG</div>
                <p className="pad-10">
                    {
                        listProduct?.length > 0 ? (
                            listProduct?.map((o, i) => (
                                <div className="hover_cart-item mbottom-10 flex">
                                    <div className="cart-item--img">
                                        <img src={o.imageRepresent[0].url} alt="" />
                                    </div>
                                    <div className="cart-item--info pad-10">
                                        <p className="font-weight-bold"> {o.name}  </p>
                                        <p>Giá : <span className="font-weight-bold"> {money(o.price)} </span></p>
                                        <p>Số lượng : <span className="font-weight-bold"> {o.num} </span> </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <i className="txt-center">Bạn chưa có sản phẩm nào</i>
                        )
                    }

                    <Link to="/cart" className="txt-center"> <span><i>Xem chi tiết</i></span><i className="fas fa-arrow-right" /> </Link>
                </p>
                <span>Các hình thức thanh toán</span>
                <div className="row mtop-20">
                    <div className="col-4">
                        <div className="bank_item txt-center" title="thanh toán qua PayPal">
                            <i className="fab fa-cc-paypal" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bank_item txt-center" title="thanh toán khi nhận hàng">
                            <i className="fas fa-shipping-fast" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bank_item txt-center" title="chuyển khoản">
                            <i className="fas fa-money-check-alt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
