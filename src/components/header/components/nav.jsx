import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="header_main-navbar">
              <ul>
                <li className="navbar_item after"><Link to="/shop">Chó<i className="fas fa-angle-down" /></Link>
                  <div id="dog">
                    <div className="navbar_item-menu">
                      <div className="item_menu-pet">
                        <p>Dinh dưỡng và chăm sóc</p>
                        <ul>
                          <li><Link to="/shop">Thức ăn cho Chó</Link></li>
                          <li><Link to="/shop">Dụng cụ ăn uống cho Chó</Link></li>
                          <li><Link to="/shop">Chuồng cho Chó</Link></li>
                          <li><Link to="/shop">Thuốc tẩy giun, sán cho Chó</Link></li>
                        </ul>
                      </div>
                      <div className="item_menu-clothe">
                        <p>Trang Phục</p>
                        <ul>
                          <li><Link to="/shop">Áo</Link></li>
                          <li><Link to="/shop">Quần</Link></li>
                          <li><Link to="/shop">Váy Đầm</Link></li>
                          <li><Link to="/shop">Giày Dép</Link></li>
                          <li><Link to="/shop">Kính</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navbar_item after"><Link to="/shop">Mèo<i className="fas fa-angle-down" /></Link>
                  <div id="cat">
                    <div className="navbar_item-menu">
                      <div className="item_menu-pet">
                        <p>Dinh dưỡng và chăm sóc</p>
                        <ul>
                          <li><Link to="/shop">Thức ăn cho Mèo</Link></li>
                          <li><Link to="/shop">Dụng cụ ăn uống cho Mèo</Link></li>
                          <li><Link to="/shop">Chuồng cho Mèo</Link></li>
                          <li><Link to="/shop">Thuốc tẩy giun, sán cho Mèo</Link></li>
                        </ul>
                      </div>
                      <div className="item_menu-clothe">
                        <p>Trang Phục</p>
                        <ul>
                          <li><Link to="#">Áo</Link></li>
                          <li><Link to="#">Quần</Link></li>
                          <li><Link to="#">Váy Đầm</Link></li>
                          <li><Link to="#">Giày Dép</Link></li>
                          <li><Link to="#">Kính</Link></li>
                          <li><Link to="#">Áo</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navbar_item after"><Link to="/services">Dịch Vụ<i className="fas fa-angle-down" /></Link>
                  <div id="services">
                    <div className="navbar_item-menu">
                      <div className="item_menu-pet">
                        <p>Dịch vụ cho thú cưng </p>
                        <ul>
                          <li>
                            <Link to="/services">Trông giữ Thú Cưng</Link>
                          </li>
                          <li>
                            <Link to="/services">Khắc thẻ tên cho Thú Cưng</Link>
                          </li>
                          <li>
                            <Link to="/services">Hoả táng Thú Cưng</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navbar_item after"><a href="#">Tin Tức<i className="fas fa-angle-down" /></a>
                  <div id="news">
                    <div className="navbar_item-menu">
                      <div className="item_menu-pet">
                        <p>Kiến Thức Thú Cưng</p>
                        <ul>
                          <li><a href="#">Phân biệt 7 giống Chó</a></li>
                          <li><a href="#">Lịch tẩy giun cho Mèo</a></li>
                          <li><a href="#">Cho Mèo mẹ ăn gì để nhiều sữa ?</a></li>
                          <li><a href="#">Giống Chó không rụng lông</a></li>
                          <li><a href="#">FCI là gì ?</a></li>
                        </ul>
                      </div>
                      <div className="item_menu-follow">
                        <p>Các thông tin liên quan</p>
                        <ul>
                          <li><a href="#">Các trạm cứu hộ Chó Mèo</a></li>
                          <li><a href="#">Nơi nhận nuôi Chó Mèo hoang</a></li>
                          <li><a href="#">Hệ thống cửa hàng</a></li>
                          <li><a href="#">Chỉ đường đến PARADISE Pet Shop </a></li>
                          <li><a href="#">Về chúng tôi</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
    )
}
