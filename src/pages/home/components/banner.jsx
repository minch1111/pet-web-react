import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  }, [])
    return (
        <section id="banner">
          <div className="pet-care-technical">
            <div className="row">
              <div className="col technical-img">
                <img src="/img/do-cong-nghe-cho-thu-cung-tai-yolo.png" alt="đồ công nghệ image" data-aos="fade-up" />
              </div>
              <div className="col technical-content">
                <h3>Phụ kiện công nghệ dành cho thú cưng</h3>
                <p>PARADISE Pet Shop là công ty chuyên phân phối các sản phẩm đồ chơi, phụ kiện công nghệ 4.0 dành cho thú cưng chính hãng tại Việt Nam.</p>
                <p className="bot-content">Với nhiều thương hiệu nổi bật và uy tín</p>
              </div>
            </div>
          </div>
        </section>
    )
}
