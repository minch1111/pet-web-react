import React from 'react'

export default function PaymentForm() {
    return (
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
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="fontw-500 fontsz-17" htmlFor="note">Ghi chú</label>
                                <textarea className="form-control" name="note" id="note" rows={3} placeholder="Ghi chú..." defaultValue={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
