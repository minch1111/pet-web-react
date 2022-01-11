import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function News(props) {
    let $ = window.$
    let array = [1,2,3,4,5,6,7,8]
    // console.log(`props.data`, props.data)
    useEffect(() => {
        $('.info-sliders').flickity({
            cellAlign: 'left',
            wrapAround: true,
            preNextButtons: true,
            contain: true,
            pageDots: false,
            on: {
                ready: function () {
                    let dotted = $('.flickity-page-dots'),
                        paging = ('.slider-bottom .dotted')
                    dotted.appendTo(paging);
                }
            }
        })
    }, [])
    return (
        <section className="section">
            <div className="pet-care-info">
                <div className="row row-small">
                    <div className="col-lg-12 col-12">
                        <h2 className="content-info">
                            <span>Kiến thức mới nhất dành cho thú cưng</span>
                        </h2>
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="info-sliders">
                            {
                                props.data?
                                props.data?.map((o, i) => (
                                    <div className="info-slider_item carousel-cell" key={i}>
                                        <div className="info_item">
                                            <Link to={`/news/${o.slug}`}>
                                                <div className="info-item-img">
                                                    <img src={o?.image?.url} alt="" />
                                                </div>
                                                <div className="info-item-content">
                                                    <div className="content-title">
                                                        <h6> {o?.title} </h6>
                                                    </div>
                                                    {/* <div className="item-content-info">
                                                        <p>Một số nghiên cứ đã chỉ ra tinh dầu thiên nhiên có tiềm năng lớn ...</p>
                                                    </div> */}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )):
                                array.forEach(e=>(
                                    <div className="info-slider_item carousel-cell">
                                    <div className="info_item">
                                        <a href="#">
                                            <div className="info-item-img">
                                                <Skeleton
                                                    height={130}
                                                />
                                            </div>
                                            <div className="info-item-content">
                                                <div className="content-title">
                                                   <Skeleton/>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                ))
                            }
                            {/* <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <a href="#">
                                        <div className="info-item-img">
                                            <img src="./img/haku.jpg" alt="" />
                                        </div>
                                        <div className="info-item-content">
                                            <div className="content-title">
                                                <h6>Shop tinh dầu thiên nhiên HAKU Farm - Quận 3,TP HCM</h6>
                                            </div>
                                            <div className="item-content-info">
                                                <p>Một số nghiên cứ đã chỉ ra tinh dầu thiên nhiên có tiềm năng lớn ...</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <div className="info-item-img">
                                        <img src="./img/tuoi-tho-cua-cho-300x169.png" alt="" />
                                    </div>
                                    <div className="info-item-content">
                                        <div className="content-title">
                                            <h6>Tuổi thọ trung bình các giống chó hiện nay – cách tính &amp; kéo dài tuổi thọ cho chó!</h6>
                                        </div>
                                        <div className="item-content-info">
                                            <p>Tuổi thọ của chó? Chó thường sống đến bao nhiêu tuổi? Tuổi thọ của chó...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <a href="#">
                                        <div className="info-item-img">
                                            <img src="./img/NEN-NUOI-CHO-HAY-MEO-300x240.jpg" alt="" />
                                        </div>
                                        <div className="info-item-content">
                                            <div className="content-title">
                                                <h6>Nên nuôi chó hay mèo? Trả lời 9 câu trắc nghiệm giúp lựa chọn đúng!</h6>
                                            </div>
                                            <div className="item-content-info">
                                                <p>Nên nuôi chó hay mèo? Cuộc sống căng thẳng bận rộn, vì thế nhiều bạn...</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <a href="#">
                                        <div className="info-item-img">
                                            <img src="./img/cac-loai-cho-thuong-so-ot-300x225.png" alt="" />
                                        </div>
                                        <div className="info-item-content">
                                            <div className="content-title">
                                                <h6>Chó sợ mùi gì? TOP 12 mùi hương mà loài chó ghét nhất?</h6>
                                            </div>
                                            <div className="item-content-info">
                                                <p>Chó sợ mùi gì? Những mùi hương mà loài chó ghét nhất? Chó là loài...</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <a href="#">
                                        <div className="info-item-img">
                                            <img src="./img/haku.jpg" alt="" />
                                        </div>
                                        <div className="info-item-content">
                                            <div className="content-title">
                                                <h6>Shop tinh dầu thiên nhiên HAKU Farm - Quận 3,TP HCM</h6>
                                            </div>
                                            <div className="item-content-info">
                                                <p>Một số nghiên cứ đã chỉ ra tinh dầu thiên nhiên có tiềm năng lớn ...</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <div className="info-item-img">
                                        <img src="./img/haku.jpg" alt="" />
                                    </div>
                                    <div className="info-item-content">
                                        <div className="content-title">
                                            <h6>Shop tinh dầu thiên nhiên HAKU Farm - Quận 3,TP HCM</h6>
                                        </div>
                                        <div className="item-content-info">
                                            <p>Một số nghiên cứ đã chỉ ra tinh dầu thiên nhiên có tiềm năng lớn ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-slider_item carousel-cell">
                                <div className="info_item">
                                    <div className="info-item-img">
                                        <img src="./img/haku.jpg" alt="" />
                                    </div>
                                    <div className="info-item-content">
                                        <div className="content-title">
                                            <h6>Shop tinh dầu thiên nhiên HAKU Farm - Quận 3,TP HCM</h6>
                                        </div>
                                        <div className="item-content-info">
                                            <p>Một số nghiên cứ đã chỉ ra tinh dầu thiên nhiên có tiềm năng lớn ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
