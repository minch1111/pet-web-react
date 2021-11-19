import React from 'react'

export default function VoucherList() {
    return (
        <div id="voucher" className="tab_content-item">
            <div className="row">
                <div className="col-lg-12 mbottom-20">
                    <div className="voucher_title">
                        <p>Ví Voucher</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="voucher_item flex shadow">
                                <div className="voucher_item-img flex justify_center align_center pad-10 background-darkgreen txt-center">
                                    <p>Khuyến mãi vận chuyển</p>
                                    <i className="fas fa-ticket-alt voucher_item-icon" />
                                </div>
                                <div className="voucher_item-content pad-10">
                                    Mã khuyến mãi vận chuyển áp dụng với toàn bộ sản phẩm với đơn
                                    hàng trên 300k với mã áp dụng <strong>TTTTTT</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="voucher_item flex shadow">
                                <div className="voucher_item-img flex justify_center align_center pad-10 background-darkorange txt-center">
                                    <p>Khuyến mãi của shop</p>
                                    <i className="fas fa-ticket-alt voucher_item-icon" />
                                </div>
                                <div className="voucher_item-content pad-10">
                                    Mã khuyến mãi của shop dành cho tất cả toàn bộ sản phẩm của cửa
                                    hàng với khuyến mãi giảm 20% khi nhập mã
                                    <strong>PARPET20</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
