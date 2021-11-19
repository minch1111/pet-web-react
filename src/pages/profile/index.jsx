import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import "../../assets/css/profile.css"
import AccountInfo from './component/accountInfo';
import AnnouceList from './component/annouceList';
import Ordered from './component/orderedList';
import VoucherList from './component/voucherList';

function Profile() {
  let $ = window.$
  useEffect(() => {
    $(function () {
      $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' }).val();
    });

    // const tabItems = document.querySelectorAll(".tab_item");
    // const tabContentItems = document.querySelectorAll(".tab_content-item");

    // tabItems.forEach((tab, index) => {
    //   const item = tabContentItems[index];

    //   tab.onclick = function () {
    //     $('.tab_item.active').removeClass('active');
    //     $('.tab_content-item.active').removeClass('active');

    //     $(tab).addClass('active');
    //     $(item).addClass('active')
    //   }
    // })
  }, [])
  return (
    <main>
      <section className="section">
        <div className="profile">
          <div className="row">
            <div className="offset-lg-1" />
            <div className="col-lg-2">
              <div className="profile_user ">
                <div className="profile_user-detail flex align_center justify_center mbottom-50">
                  <div className="user-detail--avatar">
                    <img src="./img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                  </div>
                  <div className="user-detail--name">
                    <p>Minch</p>
                  </div>
                </div>
                <div className="profile_user-items flex justify_start">
                  <div className="profile_user-account mbottom-20">
                    <NavLink className="tab_item" to="/user-profile" exact><i className="far fa-user txt-blue" /> Tài khoản
                      của tôi</NavLink>
                  </div>
                  <div className="profile_user-orderlist mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/order"><i className="fas fa-clipboard-list txt-blue" /> Đơn mua
                      của tôi</NavLink>
                  </div>
                  <div className="profile_user-announce mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/announce"><i className="far fa-bell txt-orange" /> Thông báo</NavLink>
                  </div>
                  <div className="profile_user-announce mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/voucher"><i className="fas fa-ticket-alt txt-orange" /> Voucher
                      của tôi</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab_content">
                <Switch >
                  <Route path="/user-profile" exact component={AccountInfo} />
                  <Route path="/user-profile/order" component={Ordered} />
                  <Route path="/user-profile/announce" component={AnnouceList} />
                  <Route path="/user-profile/voucher" component={VoucherList} />
                  {/* <AccountInfo />
                  <Ordered />
                  <AnnouceList />
                  <VoucherList /> */}
                </Switch>




                {/* <div id="account" className="tab_content-item active">
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
                      </div>
                    </div>
                  </div>
                  <div id="announce" className="tab_content-item">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="announce_title pad-20">
                          <p>Thông báo</p>
                        </div>
                      </div>
                      <div className="col-lg-12 pad-20 shadow">
                        <div className="announce_item row">
                          <div className="col-lg-2">
                            <div className="item_img">
                              <img src="./img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="item_info">
                              <p className="mbottom-10">Hàng đang được giao</p>
                              <p className="txt-gray">Đơn hàng Pate Rau củ cho chó đang được vận
                                chuyển, quý khách hàng hãy luôn kiểm tra trạng thái đơn hàng</p>
                            </div>
                          </div>
                          <div className="col-lg-3 flex align_center">
                            <div className="item_detail">
                              <div className="btn btn-outline-secondary">Xem chi tiết đơn hàng</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 pad-20 shadow">
                        <div className="announce_item row">
                          <div className="col-lg-2">
                            <div className="item_img">
                              <img src="./img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="item_info">
                              <p className="mbottom-10">Hàng đang được giao</p>
                              <p className="txt-gray">Đơn hàng Pate Rau củ cho chó đang được vận
                                chuyển, quý khách hàng hãy luôn kiểm tra trạng thái đơn hàng</p>
                            </div>
                          </div>
                          <div className="col-lg-3 flex align_center">
                            <div className="item_detail">
                              <div className="btn btn-outline-secondary">Xem chi tiết đơn hàng</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  </div> */}
              </div>
            </div>
            <div className="offset-lg-1" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
