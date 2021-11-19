import React from 'react'

export default function Ordered() {
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
                      <div className="col-lg-12 mbottom-50 shadow">
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
                      </div>
                    </div>
                  </div>
    )
}
