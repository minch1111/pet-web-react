import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App';
import Categories from '../../components/categories'

export default function ProductDetail(props) {
    let $ = window.$
    useEffect(() => {
        // $('.btn-plus').on('click', function () {
        //     $('.number').val(parseInt($('.number').val()) + 1);
        // });
        // $('.btn-minus').on('click', function () {
        //     $('.number').val(parseInt($('.number').val()) - 1);
        //     if ($('.number').val() == 0) {
        //         $('.number').val(1);
        //     }
        // });

        const imgTabs = document.querySelectorAll('.imgTab');
        const itemTabs = document.querySelectorAll('.imgItem');

        imgTabs.forEach((tab, index) => {
            const itemTab = itemTabs[index];

            tab.onclick = function () {
                $('.imgTab.active').removeClass('active');
                $('.imgItem.active').removeClass('active');

                $(tab).addClass('active');
                $(itemTab).addClass('active')
            }
        })
        const tabs = document.querySelectorAll('.tab_title');
        const items = document.querySelectorAll('.item');

        tabs.forEach((tab, index) => {
            const item = items[index];

            tab.onclick = function () {
                $('.tab_title.active').removeClass('active');
                $('.item.active').removeClass('active');

                $(tab).addClass('active');
                $(item).addClass('active')
            }
        })


    }, [])

    const { data, addCartFromDetail } = useContext(Context);
    const [ productInfo, setProduct ] = useState(props.location.querry?.data  || {});
    const [ number, setNumber ] = useState();
    // const [cart, setCart] = useState({ product: props.location.querry})

    const inCrease = () => {
        setNumber(number + 1)
        // item.number
    }
    const deCrease = () => {
        if(number<=0)setNumber(0)
        else setNumber(number-1)
     }

    const getNumber = (ev) => {
        let value = ev.currentTarget.value
        setNumber(value)
     }

    const handleAdd = () => {
        addCartFromDetail({...productInfo,number:number})
    }
    useEffect(async ()=>{
        setNumber(productInfo?.number)
    },[productInfo])

    if (!productInfo) return <div>con</div>
    return (
        <main>
            <section className="section">
                <div className="products">
                    <div className="product_container">
                        <div className="row">
                            <div className="offset-lg-3" />
                            <div className="col-lg-9">
                                <div className="title">
                                    <h3>THÔNG TIN SẢN PHẨM</h3>
                                </div>
                            </div>
                            <Categories />
                            <div className="col-lg-9">
                                <div className="product_info">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="product_info-img">
                                                        <div className="imgItem active">
                                                            <img src={productInfo?.img} alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src="/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg" alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src="/img/hinh-san-pham-broadline-cho-meo-tu-2-5-kg-toi-7-5-kg-300x300.jpg" alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src="/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="product_info-imgTab">
                                                        <div className="imgTab active" onclick="openCity()">
                                                            <img src={productInfo?.img} alt="" />
                                                        </div>
                                                        <div className="imgTab">
                                                            <img src="/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg" alt="" />
                                                        </div>
                                                        <div className="imgTab">
                                                            <img src="/img/hinh-san-pham-broadline-cho-meo-tu-2-5-kg-toi-7-5-kg-300x300.jpg" alt="" />
                                                        </div>
                                                        <div className="imgTab">
                                                            <img src="/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="product_info-detail">
                                                <div className="detail_name mbottom-20">
                                                    <p> {productInfo?.name} </p>
                                                </div>
                                                <div className="detail_des mbottom-20">
                                                    <p> {productInfo?.describe} </p>
                                                </div>
                                                <div className="detail_color mbottom-20">
                                                    <div className="detail_color-title font-20 fweight-700">Màu sắc :</div>
                                                    <div className="detail_color-contain">
                                                        (không có)
                                                    </div>
                                                </div>
                                                <div className="detail_rate mbottom-20">
                                                    <div className="detail_rate-star font-20">
                                                        <i className="fas fa-star txt-yellow" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="detail_rate-note">
                                                        <span>(Tổng đánh giá của khách hàng)</span>
                                                    </div>
                                                </div>
                                                <div className="detail_cost font-20 fweight-700 mbottom-20">
                                                    <p>Giá : $ {productInfo?.price} </p>
                                                </div>
                                                <div className="addCart mbottom-20">
                                                    <div className="addCart_number">
                                                        <div className="form">
                                                            <button type="submit" onClick={deCrease} className="btn btn-minus">-</button>
                                                            <input onChange={getNumber} name="numberCart" type="text" className="number" value={number} />
                                                            <button type="submit" onClick={inCrease} className="btn btn-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="addCart_btn">
                                                        <button onClick={handleAdd} type="button" className="btn btn-danger btn-add">Thêm vào
                                                            giỏ</button>
                                                    </div>
                                                </div>
                                                <div className="detail_more">
                                                    <div className="detail_more-orderPhone">
                                                        <span className="font-20 fweight-700"> Đặt nhanh qua số :</span> <a href="to0968087127">0968087127</a>
                                                    </div>
                                                    <div className="detail_more-cate">
                                                        <p className="fweight-700">
                                                            Danh mục : <span>#Doanchocho</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_detail mtop-50">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <div className="tabs">
                                                <div className="product_detail-info tab_title active">
                                                    <p>Mô tả</p>
                                                </div>
                                                <div className="product_detail-comments tab_title">
                                                    <p>Đánh giá</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mtop-50">
                                            <div className="items">
                                                <div className="item_info item active">
                                                    <div className="item_info-des container">
                                                        <p><strong>Tên sản phẩm</strong> Lorem ipsum dolor sit amet
                                                            consectetur adipisicing elit. Debitis eius velit, cupiditate
                                                            facilis, atque iste tempore harum numquam aliquid dolorum
                                                            accusantium consectetur. Ut architecto, possimus optio tempora
                                                            sunt necessitatibus sint!</p>
                                                        <p><strong>Xuất xứ :</strong> USA</p>
                                                        <p><strong>Cửa hàng</strong> Paradise pet</p>
                                                    </div>
                                                </div>
                                                <div className="item_comments item">
                                                    <div className="item_comments-title">
                                                        <span>Đánh giá của khách hàng về <strong>*Tên sản phẩm
                                                        </strong>:</span>
                                                        <div className="item_comments-info mtop-50">
                                                            <div className="container mbottom-20 flex">
                                                                <div className="ava">
                                                                    <img src="/img/do-cong-nghe-cho-thu-cung-tai-yolo.png" alt="" />
                                                                </div>
                                                                <div className="rates">
                                                                    <p>
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                    </p>
                                                                    <p>
                                                                        <strong>Tên khách hàng </strong>
                                                                    </p><p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit. Assumenda voluptas iure alias porro. Eius
                                                                        harum error deleniti doloremque adipisci, iste neque
                                                                        odio, vero natus voluptatem voluptatibus modi
                                                                        reprehenderit, suscipit quo?
                                                                    </p>
                                                                    <p />
                                                                </div>
                                                            </div>
                                                            <div className="container mbottom-20 flex">
                                                                <div className="ava">
                                                                    <img src="/img/do-cong-nghe-cho-thu-cung-tai-yolo.png" alt="" />
                                                                </div>
                                                                <div className="rates">
                                                                    <p>
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                        <i className="fas fa-star txt-yellow" />
                                                                    </p>
                                                                    <p>
                                                                        <strong>Tên khách hàng </strong>
                                                                    </p><p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit. Assumenda voluptas iure alias porro. Eius
                                                                        harum error deleniti doloremque adipisci, iste neque
                                                                        odio, vero natus voluptatem voluptatibus modi
                                                                        reprehenderit, suscipit quo?
                                                                    </p>
                                                                    <p />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mtop-50">
                                <div className="products_relate row flex">
                                    <div className="col-lg-12 title">
                                        <p className="fontw-700 fontsz-20 mbottom-20">Sản phẩm liên quan</p>
                                    </div>
                                    <div className="col-lg-3 item_relate">
                                        <a href="./productDetail.html">
                                            <div className="product_item">
                                                <div className="product_item-img">
                                                    <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                                                </div>
                                                <div className="product_item-content">
                                                    <div className="item_kind">Thức ăn cho chó</div>
                                                    <div className="item_content">Pate Tươi Bò Rau Củ Pet Choy Dành Cho Chó
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 item_relate">
                                        <a href="./productDetail.html">
                                            <div className="product_item">
                                                <div className="product_item-img">
                                                    <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                                                </div>
                                                <div className="product_item-content">
                                                    <div className="item_kind">Thức ăn cho chó</div>
                                                    <div className="item_content">Pate Tươi Bò Rau Củ Pet Choy Dành Cho Chó
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 item_relate">
                                        <a href="./productDetail.html">
                                            <div className="product_item">
                                                <div className="product_item-img">
                                                    <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                                                </div>
                                                <div className="product_item-content">
                                                    <div className="item_kind">Thức ăn cho chó</div>
                                                    <div className="item_content">Pate Tươi Bò Rau Củ Pet Choy Dành Cho Chó
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 item_relate">
                                        <a href="./productDetail.html">
                                            <div className="product_item">
                                                <div className="product_item-img">
                                                    <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png" alt="" />
                                                </div>
                                                <div className="product_item-content">
                                                    <div className="item_kind">Thức ăn cho chó</div>
                                                    <div className="item_content">Pate Tươi Bò Rau Củ Pet Choy Dành Cho Chó
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <div class="col-lg-3 item">
                                    <a href="./productDetail.html">
                                        <div class="product_item">
                                            <div class="product_item-img">
                                                <img src="/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
                                                    alt="">
                                            </div>
                                            <div class="product_item-content">
                                                <div class="item_kind">Thức ăn cho chó</div>
                                                <div class="item_content">Pate Tươi Bò Rau Củ Pet Choy Dành Cho Chó
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
