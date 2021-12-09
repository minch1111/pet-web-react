import React from 'react'

export default function ProductPayment() {
    return (
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
                        <div className="col-lg-12 mbottom-20">
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
                        </div>
                    </div>
                    <div className="col-lg-12 mbottom-50">
                        <div className="content-title--price">
                            <div className="price_total fontw-500 fontsz-17">
                                <p>Tổng tiền sản phẩm : <span>$.$$</span></p>
                            </div>
                            <div className="price_shipping fontw-500 fontsz-17">
                                <p>Phí vận chuyển <span>$.$$</span></p>
                            </div>
                            <div className="price_totalbill fontw-500 fontsz-17">
                                <p>Tổng tiền hoá đơn : <span>$.$$</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="content-title--btn flex justify_evenly align_center">
                            <div className="btn btn-primary">
                                Đặt hàng
                            </div>
                            <div className="btn btn-danger">
                                Hủy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
