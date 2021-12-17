import React, { useEffect } from 'react'
import Advertise from './components/advertise'
import Banner from './components/banner'
import Promo from './components/promo'
import ProductList from './components/productList'
import Sliders from './components/sliders'
import NewsHome from './components/newsHome'

export default function Home() {
  let foodList =[
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-nutrience-original-healthy-kitten-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-nutrience-subzero-fraser-valley-300x300.jpg"
    },
    {
      type:"Thức ăn cho chó",
      name:"Pate Rau củ Tươi dành cho chó",
      img:"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-nutrience-original-healthy-kitten-300x300.jpg"
    },
    {
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      img:"/img/hinh-san-pham-nutrience-subzero-fraser-valley-300x300.jpg"
    },
    {
      type:"Thức ăn cho chó",
      name:"Pate rau củ tươi dành cho chó",
      img:"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },

  ]
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
    return (
        <main>
        <Sliders />
        <Promo />
        <section className="header-fix">
          <div className="header_menu-container">
            <ul>
              <li>
                <div className="menu item_user">
                  <span><i className="fas fa-user" /> Accout</span>
                  <i className="fas fa-chevron-right" />
                </div>
              </li>
              <li>
                <div className="menu item_dog">
                  <span>Chó</span>
                  <i className="fas fa-chevron-right" />
                </div>
              </li>
              <li>
                <div className="menu item_cat">
                  <span>Mèo</span>
                  <i className="fas fa-chevron-right" />
                </div>
              </li>
              <li>
                <div className="menu item_services">
                  <span>Dịch vụ</span>
                  <i className="fas fa-chevron-right" />
                </div>
              </li>
              <li>
                <div className="menu item_news">
                  <span>Tin tức</span>
                  <i className="fas fa-chevron-right" />
                </div>
              </li>
            </ul>
            <p><b>FREESHIP</b> với đơn hàng trên 300k</p>
          </div>
          <div className="header_menu-list">
            <div className="menu_list user_menu">
              <ul>
                <li className="back"><a href="#"><i className="fas fa-arrow-left" /><span>Account</span></a></li>
                <li><a href="#">Đăng kí</a></li>
                <li><a href="#">Đăng nhập</a></li>
              </ul>
            </div>
            <div className="menu_list dog_menu">
              <ul>
                <li className="back"><a href="#"><i className="fas fa-arrow-left" /><span>Chó</span></a></li>
                <li>
                  <div className="menu_list-choice"><a href="index.html"><span>Dinh Dưỡng &amp; Chăm Sóc</span></a>
                    <i className="fas fa-chevron-down menu_item-1" /></div></li>
                <ul className="menu_item item-1">
                  <li><a href="#">Thức ăn cho Chó</a></li>
                  <li><a href="#">Dụng cụ ăn uống cho Chó</a></li>
                  <li><a href="#">Chuồng cho Chó</a></li>
                  <li><a href="#">Thuốc tẩy giun, sán cho Chó</a></li>
                </ul>
              </ul>
              <ul>
                <li>
                  <div className="menu_list-choice"><a href="#"><span>Trang Phục</span></a>
                    <i className="fas fa-chevron-down menu_item-2" /></div></li>
                <ul className="menu_item item-2">
                  <li><a href="#">Áo</a></li>
                  <li><a href="#">Quần</a></li>
                  <li><a href="#">Váy Đầm</a></li>
                  <li><a href="#">Giày Dép</a></li>
                  <li><a href="#">Kính</a></li>
                </ul>
              </ul>
              <div className="clear" />
            </div>
            <div className="menu_list cat_menu">
              <ul>
                <li className="back"><a href="#"><i className="fas fa-arrow-left" /><span>Mèo</span></a></li>
                <li>
                  <div className="menu_list-choice"><a href="index.html"><span>Dinh Dưỡng &amp; Chăm Sóc</span></a>
                    <i className="fas fa-chevron-down menu_item-1" /></div></li>
                <ul className="menu_item item-1">
                  <li><a href="#">Thức ăn cho Mèo</a></li>
                  <li><a href="#">Dụng cụ ăn uống cho Mèo</a></li>
                  <li><a href="#">Chuồng cho Mèo</a></li>
                  <li><a href="#">Thuốc tẩy giun, sán cho Mèo</a></li>
                </ul>
              </ul>
              <ul>
                <li>
                  <div className="menu_list-choice"><a href="#"><span>Trang Phục</span></a>
                    <i className="fas fa-chevron-down menu_item-2" /></div></li>
                <ul className="menu_item item-2">
                  <li><a href="#">Áo</a></li>
                  <li><a href="#">Quần</a></li>
                  <li><a href="#">Váy Đầm</a></li>
                  <li><a href="#">Giày Dép</a></li>
                  <li><a href="#">Kính</a></li>
                </ul>
              </ul>
              <div className="clear" />
            </div>
            <div className="menu_list services_menu">
              <ul>
                <li className="back"><a href="#"><i className="fas fa-arrow-left" /><span>Dịch Vụ</span></a></li>
                <li>
                  <div className="menu_list-choice"><a href="#"><span>Dịch Vụ cho Thú Cưng</span></a>
                    <i className="fas fa-chevron-down menu_item-1" /></div></li>
                <ul className="menu_item item-1">
                  <li>
                    <a href="#">Trông giữ Thú Cưng</a>
                  </li>
                  <li>
                    <a href="#">Khắc thẻ tên cho Thú Cưng</a>
                  </li>
                  <li>
                    <a href="#">Hoả táng Thú Cưng</a>
                  </li>
                </ul>
              </ul>
              <div className="clear" />
            </div>
            <div className="menu_list news_menu">
              <ul>
                <li className="back"><a href="#"><i className="fas fa-arrow-left" /><span>Tin Tức</span></a></li>
                <li><a href="#"><span>Kiến Thức Thú Cưng</span></a></li>
                <li><a href="#">Phân biệt 7 giống Chó</a></li>
                <li><a href="#">Lịch tẩy giun cho Mèo</a></li>
                <li><a href="#">Cho Mèo mẹ ăn gì để nhiều sữa ?</a></li>
                <li><a href="#">Giống Chó không rụng lông</a></li>
                <li><a href="#">FCI là gì ?</a></li>
              </ul>
              <ul>
                <li><a href="#"><span>Các Thông Tin Liên Quan</span></a></li>
                <li><a href="#">Các trạm cứu hộ Chó Mèo</a></li>
                <li><a href="#">Nơi nhận nuôi Chó Mèo hoang</a></li>
                <li><a href="#">Hệ thống cửa hàng</a></li>
                <li><a href="#">Chỉ đường đến PARADISE Pet Shop </a></li>
                <li><a href="#">Về chúng tôi</a></li>
              </ul>
              <div>
                <img src="./img/thank-you.jpg" alt="thank you image" style={{height: '150px'}} />
              </div>
              <div className="clear" />
            </div>
          </div>
        </section>
        <section className="header_cart-sidebar">
          <div className="cart_sidebar-container">
            <div className="cart_close">
              <span />
              <span />
            </div>
            <div className="cart_item-title text-center padd-20">
              <h4>GIỎ HÀNG</h4>
            </div>
            <div className="cart_item-nothing text-center padd-20">
              <p><span>Chưa có sản phẩm nào trong giỏ</span></p>
            </div>
            <div className="cart-sidebar-bank text-center">
              <span><i>Các hình thức thanh toán</i></span>
              <div className="row margin-0">
                <div className="col-4">
                  <div className="bank_item" title="thanh toán qua PayPal">
                    <i className="fab fa-cc-paypal" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="bank_item" title="thanh toán khi nhận hàng">
                    <i className="fas fa-shipping-fast" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="bank_item" title="chuyển khoản">
                    <i className="fas fa-money-check-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Advertise />
        {/* Sản phẩm thức ăn */}
        <ProductList
          title={"Thức ăn & dinh dưỡng cho chó mèo"}
          data={foodList}
        />
        <Banner />
        {/* Sản phẩm phụ kiện */}
        <ProductList title={"Sản phẩm dành cho thú cưng"}
          data={foodList}
        />
        <NewsHome />
      </main>
    )
}
