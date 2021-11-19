import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../App'

export default function HeaderCart() {

    const { user } = useContext(Context);
    var i = 0
    function numPro() {
        user?.cart?.forEach(element => {
            i = i + element?.number
        });
    }
    numPro()
    console.log(`i`, i)


    console.log(`data.cart`, user?.cart)
    return (
        <div className="header_main-cart after hover_cart">
            <div className="cart">
                <i className="fas fa-shopping-cart" />
            </div>
            <div className="cart_number">
                <span>{i}</span>
            </div>
            <div className="hover_cart-content">
                <div className="title txt-center fontw-700">GIỎ HÀNG</div>
                <p className="txt-center pad-20">
                    <i>Bạn chưa có sản phẩm nào</i>
                    <Link to="/cart"> <span><i>Xem chi tiết</i></span><i className="fas fa-arrow-right" /> </Link>
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
