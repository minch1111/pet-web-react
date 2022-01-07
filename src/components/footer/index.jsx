import React, { useEffect } from 'react'
import AOS from 'aos'

export default function Footer() {
  let $ = window.$;
  useEffect(() => {
    $('.brand-sliders').flickity({
      cellAlign: 'center',
      wrapAround: true,
      prevNextButtons: false,
      contain: true,
      pageDots: false,
      adaptiveHeight: true,
      autoPlay: 5000,
      on: {
        ready: function () {
          let dotted = $('.flickity-page-dots'),
            paging = ('.slider-bottom .dotted')
          dotted.appendTo(paging);
        }
      }

    })
    AOS.init({
      duration : 2000
    })
    const btn = document.querySelector('.fix-to-top');
    $(btn).click(function () {
      // window.scrollBy(
      //   {
      //     top: -document.body.offsetHeight,
      //     behavior: "smooth"
      //   }
      // )
      $('html,body').stop().animate({
        scrollTop: -$(this).offset().top
      }, 2000);
    })

  }, [])
  return (
    <footer>
      <section className="section">
        <div className="row">
          <div className="col-12 col-lg-2">
            <div className="brand-title" >
              <h3>Thương hiệu uy tín <i className="fas fa-check-circle" /></h3>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="brand-sliders border-left-right animated-border" data-aos="fade-right">
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/discus-viet-nam.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/hikari-food-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/logo-hai-titan.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/may-in-theu-hai-trieu-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/meo-than-tai-nekko.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/mew-pet-shop-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/mizuho-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/noi-that-thu-cung-petroom.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/pet-choy-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/pet-tag-by-yolo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/pet-town-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/petkit-san-pham-thong-minh-cho-thu-cung.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/ranchu-viet-nam-logo.png" alt="" /></a>
              </div>

              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/skretting-logo.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/sphynx-t-shirt-factory.png" alt="" /></a>
              </div>
              <div className="brand-slider-item carousel-cell" data-aos="fade-right" data-aos-duration={5000}>
                <a href="#"><img src="/img/logo_brand/yolo-pet-shop-tren-shopee.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="row">
          <div className="col-lg-12 title-footer">
            <div className="footer-logo">
              <img src="/img/PetLogo.png" alt="logo" className="logo" />
            </div>
            <div className="footer-slogan">
              <h3>Paradise Pet Shop</h3>
              <h5 data-aos="fade-right">Cửa hàng thú cưng uy tín tại Sài Gòn</h5>
              <h4 data-aos="fade-up">-Best For Pet-</h4>
            </div>
          </div>
          <div className="col-lg-12 col-12 about-footer">
            <div className="row">
              <div className="col-12 col-lg-6 about-footer-af">
                <div className="row shop-about">
                  <div className="col-lg-12">
                    <h3>Thông tin liên hệ</h3>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="shop-about-info"><b>Hot line mua hàng : </b> <a href="#" style={{ display: 'inline' }}>0909080872</a> (Zalo, Viber)</div>
                    <div className="shop-about-info"><b>Cửa hàng :</b> 21 Lê Thị Hà, Xã Tân Xuân, Huyện Hóc Môn, Tp HCM</div>
                    <div className="shop-about-info"><b>Văn phòng : </b>Toà nhà Mason Golden 119 Phổ Quang,Phường 9, Quận Phú Nhuận, Tp HCM</div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="shop-about-info"><b>CSKH: </b><a href="#" style={{ display: 'inline' }}>0907123098</a></div>
                    <div className="shop-about-info"><b>Giờ mở cửa:</b> 8h20 - 21h30( Thứ 2  - Thứ 7) | 9h - 21h(Chủ nhật)</div>
                    <div className="shop-about-info"><b>Email:</b> ParadisePet@gmail.com</div>
                  </div>
                  <div className="col-lg-12 top-20">
                    <div className="shop-about-social">
                      <p>Liên kết xã hội:</p>
                      <a href="#" className="fb"><i className="fab fa-facebook fb" /></a>
                      <a href="#" className="ins"><i className="fab fa-instagram ins" /></a>
                      <a href="#" className="twt"><i className="fab fa-twitter twt" /></a>
                      <a href="#" className="pin"><i className="fab fa-pinterest pin" /></a>
                      <a href="#" className="ytb"><i className="fab fa-youtube ytb" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 care-footer">
                <div className="row shop-care">
                  <div className="col-12 col-lg-12">
                    <h3>Chăm sóc khách hàng</h3>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="shop-care-customer"><a href="#"> Điều khoản &amp; chính sách bảo mật</a></div>
                    <div className="shop-care-customer"><a href="#">Điều kiện giao dịch chung</a> </div>
                    <div className="shop-care-customer"><a href="#">Vận chuyển &amp; Giao nhận</a></div>
                    <div className="shop-care-customer"><a href="#">Chính sách bảo hành &amp; đổi trả</a></div>
                    <div className="shop-care-customer"><a href="#">Tiếp nhận &amp; giải quyết khiếu nại</a></div>
                    <div className="shop-care-customer"><a href="#">Cam kết chất lượng</a></div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="shop-care-customer"><a href="#">Hướng dẫn mua hàng</a></div>
                    <div className="shop-care-customer"><a href="#">Bán buôn – bán sỉ</a></div>
                    <div className="shop-care-customer"><a href="#">Tài khoản thanh toán</a></div>
                    <div className="shop-care-customer"><a href="#">Sản phẩm khuyến mãi</a></div>
                    <div className="shop-care-customer"><a href="#">Câu hỏi thường gặp</a></div>
                    <div className="shop-care-customer"><a href="#">Chỉ đường đến shop</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-img">
      </section>
      <div className="fix-to-top">
        <div className="btn-to-Top">
          <div className="btn-container">
            <span />
            <span />
          </div>
        </div>
      </div>
    </footer>
  )
}
