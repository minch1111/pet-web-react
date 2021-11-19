import React from 'react'

export default function Advertise() {
    return (
        <section className="section">
            <div className="pet-care-choice">
                <div className="row care-choice-content">
                    <div className="col-lg-12 col-sm-12 content-pet">
                        <h2>PARADISE PET SHOP <i className="far fa-registered" />  <p>CỬA HÀNG THÚ CƯNG, CHÓ MÈO UY TÍN TỪ 2012</p></h2>
                    </div>
                    <div className="col col-4 pet-care-item">
                        <a href="#">
                            <img src="/img/mua-thuc-an-cho-meo-tai-yolo-pet-shop.jpg" alt="" />
                            <div className="pet-btn">
                                <p>Tìm hiểu</p>
                            </div>
                        </a>
                    </div>
                    <div className="col col-4 pet-care-item">
                        <a href="#">
                            <img src="/img/mua-thuc-an-cho-cho-tai-yolo-pet-shop.jpg" alt="" />
                            <div className="pet-btn">
                                <p>Tìm hiểu</p>
                            </div>
                        </a>
                    </div>
                    <div className="col col-4 pet-care-item">
                        <a href="#">
                            <img src="/img/hoc-hoi-kien-thuc-cham-soc-thu-cung-yolo.jpg" alt="" />
                            <div className="pet-btn">
                                <p>Tìm hiểu</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
