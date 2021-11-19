import React, { useEffect } from 'react'

export default function AccountInfo() {
    let $ = window.$
    useEffect(() => {
        $(function () {
            $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' }).val();
        });
    }, [])
    return (
        <div id="account" className="tab_content-item">
            <div className="account-title mbottom-20">
                <p className="title mbottom-10">Hồ sơ của tôi</p>
                <p className="sub-title mbottom-20"><i>Quản lí hồ sơ thông tin tài khoản của bạn</i></p>
            </div>
            <div className="account-form">
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tên</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập tên ..." defaultValue="Nguyễn Văn A" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mật khẩu</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu mới...." defaultValue={123456789} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập email mới ..." defaultValue="abc@gmail.com" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Số điện
                            thoại</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại mới ..." defaultValue={909} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Giới tính</label>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" defaultValue="male" defaultChecked />
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" defaultValue="female" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" defaultValue="other" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Khác</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Ngày sinh</label>
                        <div className="col-sm-10">
                            {/* <input type="text"  class="form-control"  placeholder="Nhập số điện thoại mới ..." value="090909090"> */}
                            <input type="text" id="datepicker" className="form-control" defaultValue="19/12/2000" data-date-format="dd/mm/yyyy" />
                        </div>
                    </div>
                    <div className="form-group row mbottom-20">
                        <label className="col-sm-2 col-form-label">Địa chỉ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập địa chỉ ..." defaultValue="Đường aaa , Phường 9 quận 10,TP HCM" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2" />
                        <div className="col-lg-10">
                            <button className="btn btn-danger">Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
