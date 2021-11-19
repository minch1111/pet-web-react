import React from 'react'
import Categories from '../../components/categories'

function Services() {
    return (
        <main>
        <section className="section">
          <div className="products">
            <div className="product_container">
              <div className="row">
                <Categories />
                <div className="col-lg-9">
                  <div className="row services">
                    <div className="col-lg-12">
                      <div className="service_banner">
                        <img src="./img/service_banner_3_e.jpg" alt="Banner service" />
                      </div>
                      <div className="service_introduce">
                        <span>
                          <p>Những dịch vụ của chúng tôi đảm bảo chất lượng <i className="fas fa-check" /></p>
                          <p>Mang đến cho thú cưng của bạn những điều tốt đẹp nhất <i className="far fa-smile-beam" /></p>
                        </span>    
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="service_item">
                        <div className="service_item-img">
                          <img src="./img/service_banner.jpg" alt="Trông giữ chó mèo" />
                        </div>
                        <div className="service_item-content">
                          <div className="content_name">
                            <h4>Trông giữ chó mèo</h4>
                          </div>
                          <div className="content-describe">
                            <span>
                              Bạn đang chuẩn bị một chuyến đi công tác vài ngày? Hay cả gia đình bạn chuẩn bị đi du lịch, bạn lo lắng không có ai chăm sóc cho thú cưng của bạn? Bạn rất muốn dẫn chúng đi theo những điều kiện ra xôi không cho phép bạn làm điều đó. Hãy để dịch vụ giữ thú cưng của Paradise Pet chúng tôi giúp bạn
                              Với Dịch Vụ Giữ Thú Cưng của chúng tôi bạn sẽ yên tâm về thú cưng của mình mỗi khi đi xa, du lịch hay công tác. Các khách sạn thú cưng của chúng tôi sẽ giúp bé yêu của bạn thoái mái giống như chính ở nhà mình
                            </span>
                          </div>
                          <div className="content_btn">
                            <a href="#">Xem chi tiết</a>
                            <i className="fas fa-arrow-right" />
                          </div>
                        </div>       
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="service_item">
                        <div className="service_item-img">
                          <img src="./img/name-tag.jpg" alt="Trông giữ chó mèo" />
                        </div>
                        <div className="service_item-content">
                          <div className="content_name">
                            <h4>Khắc thẻ tên cho thú cưng</h4>
                          </div>
                          <div className="content-describe">
                            <span>
                              Với những chiếc vòng cổ cho thú cưng chó mèo không chỉ đơn giản là vật phẩm trang trí đẹp mắt cho cún cưng, mèo cưng nhà bạn mà trong một số trường hợp bị lạc thì những chiếc bảng tên trên vòng cổ này sẽ là thông tin vô cùng hữu ích để những người tốt bụng có thể đưa thú cưng của bạn về bên chủ nhân
                            </span>
                          </div>
                          <div className="content_btn">
                            <a href="#">Xem chi tiết</a>
                            <i className="fas fa-arrow-right" />
                          </div>
                        </div>       
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="service_item">
                        <div className="service_item-img">
                          <img src="./img/RIP.jpg" alt="Trông giữ chó mèo" />
                        </div>
                        <div className="service_item-content">
                          <div className="content_name">
                            <h4>Hỏa táng thú cưng</h4>
                          </div>
                          <div className="content-describe">
                            <span>
                              Khi chó mèo mất đi những người chủ luôn mong muốn “bạn thân” của mình ra đi một cách bình an, thanh thản. Vì thế việc đưa các bé đi hỏa thiêu, chôn cất là điều mà rất nhiều gia đình muốn làm cho các bé, để đưa các bé về nơi an nghỉ cuối cùng.
                            </span>
                          </div>
                          <div className="content_btn">
                            <a href="#">Xem chi tiết</a>
                            <i className="fas fa-arrow-right" />
                          </div>
                        </div>       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default Services
