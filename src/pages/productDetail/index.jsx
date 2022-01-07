import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { Context } from '../../App';
import Categories from '../../components/categories'
import { ADD_TO_CART } from '../../store/type';
import shopService from '../../services/shopService';
import ReactStar from 'react-rating-stars-component'
import { Link } from 'react-router-dom';
let $ = window.$

export default function ProductDetail(props) {

    const [productInfo, setProductInfo] = useState();
    const [productsRelated, setProductRelated] = useState()
    // const [listRate,setListRate]=useState()
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch()
    let { slug } = useParams()
    console.log(`slug`, slug)

    useEffect(() => {
        window.scrollTo(0, 0)
        // const imgTabs = document.querySelectorAll('.imgTab');
        // const itemTabs = document.querySelectorAll('.imgItem');

        // imgTabs.forEach((tab, index) => {
        //     const itemTab = itemTabs[index];
        //     tab.onclick = function () {
        //         $('.imgTab.active').removeClass('active');
        //         $('.imgItem.active').removeClass('active');

        //         $(tab).addClass('active');
        //         $(itemTab).addClass('active')
        //     }
        // })
    }, [])
    // useEffect(() => {
    //     const tabs = document.querySelectorAll('.tab_title');
    //     const items = document.querySelectorAll('.item');

    //     tabs.forEach((tabb, index) => {
    //         const item = items[index];

    //         tabb.onclick = function () {
    //             $('.tab_title.active').removeClass('active');
    //             $('.item.active').removeClass('active');

    //             $(tabb).classList.add('active');
    //             $(item).classList.add('active')
    //         }
    //     })
    // }, [])
    useEffect(async () => {
        let res = await shopService.getDetailProductBySlug(slug)
        await setProductInfo(res)
        let res1 = await shopService.getProductsRelate(slug)
        await setProductRelated(res1.SameFoods)
    }, [slug])
    console.log(`productsRelated`, productsRelated)

    // const { data, addCartFromDetail } = useContext(Context);

    // const [cart, setCart] = useState({ product: props.location.querry})

    const inCrease = () => {
        if (productInfo.amountStock - number > 0) {
            setNumber(number + 1)
        }
        else {
            alert("Oops, Hiện không đủ số lượng hàng cho bạn đặt 🙀")
        }
        // item.number
    }
    const deCrease = () => {
        if (number <= 0) setNumber(0)
        else setNumber(number - 1)
    }

    const getNumber = (ev) => {
        let value = ev.currentTarget.value
        if (productInfo?.product?.amountStock - parseInt(value) >= 0) {
            setNumber(parseInt(value))
        }

    }

    const handleAdd = () => {
        // addCartFromDetail({...productInfo,number:number})
        dispatch({
            type: ADD_TO_CART,
            payload: {
                o: productInfo.product,
                num: number
            }
        })
        alert(`Đã thêm ${productInfo?.product?.name} vào giỏ hàng`)
    }
    const money = (a) => {
        return a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }
    const handleClickChangeImage = () => {
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
        // const tabs = document.querySelectorAll('.tab_title');
        // const items = document.querySelectorAll('.item');

        // tabs.forEach((tab, index) => {
        //     const item = items[index];

        //     tab.onclick = function () {
        //         $('.tab_title.active').removeClass('active');
        //         $('.item.active').removeClass('active');

        //         $(tab).addClass('active');
        //         $(item).addClass('active')
        //     }
        // })
    }

    const showRate = () => {
        document.querySelector('.product_detail-info').classList.remove('active');
        document.querySelector('.item_info').classList.remove('active');
        document.querySelector('.product_detail-comments').classList.add('active');
        document.querySelector('.item_comments').classList.add('active');
    }
    const showDescription = () => {
        document.querySelector('.product_detail-comments').classList.remove('active');
        document.querySelector('.item_comments').classList.remove('active');
        document.querySelector('.product_detail-info').classList.add('active');
        document.querySelector('.item_info').classList.add('active');
    }

    if (!productInfo) return <div>Loading...</div>
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
                                                            <img src={productInfo?.product?.listImage[0].image[0].url} alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src={productInfo?.product?.listImage[1]?.image[0]?.url} alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src={productInfo?.product?.listImage[2]?.image[0]?.url} alt="" />
                                                        </div>
                                                        <div className="imgItem">
                                                            <img src={productInfo?.product?.listImage[3]?.image[0]?.url} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="product_info-imgTab">
                                                        <div className="imgTab active" onClick={handleClickChangeImage}>
                                                            <img src={productInfo?.product?.listImage[0]?.image[0]?.url} alt="" />
                                                        </div>
                                                        <div className="imgTab" onClick={handleClickChangeImage}>
                                                            <img src={productInfo?.product?.listImage[1]?.image[0]?.url} alt="" />
                                                        </div>
                                                        <div className="imgTab" onClick={handleClickChangeImage}>
                                                            <img src={productInfo?.product?.listImage[2]?.image[0]?.url} alt="" />
                                                        </div>
                                                        <div className="imgTab" onClick={handleClickChangeImage}>
                                                            <img src={productInfo?.product?.listImage[3]?.image[0]?.url} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="product_info-detail">
                                                <div className="detail_name mbottom-20">
                                                    <p> {productInfo?.product?.name} </p>
                                                </div>
                                                <div className="detail_des mbottom-20">
                                                    <p> {productInfo?.product?.short_description} </p>
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
                                                    <p>Giá :  {money(productInfo?.product?.price)} </p>
                                                </div>
                                                <div className="detail_cost mbottom-20">
                                                    <span style={{ color: 'gray' }}>Số lượng tồn :  {productInfo?.product?.amountStock} </span>
                                                </div>
                                                <div className="addCart mbottom-20">
                                                    <div className="addCart_number">
                                                        <div className="form">
                                                            <button type="submit" onClick={deCrease} className="btn btn-minus">-</button>
                                                            <input onChange={getNumber} name="numberCart" type="number" className="number" value={number} />
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
                                                            Danh mục : <span>#{slug}</span>
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
                                                <div className="product_detail-info tab_title active" onClick={showDescription}>
                                                    <p>Mô tả</p>
                                                </div>
                                                <div className="product_detail-comments tab_title" onClick={showRate}>
                                                    <p>Đánh giá</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mtop-50">
                                            <div className="items">
                                                <div className="item_info item active">
                                                    <div className="item_info-des container">
                                                        <p><strong>Tên sản phẩm</strong> {productInfo?.product?.name} </p>
                                                        <p><strong>Nhãn Hiệu :</strong> {productInfo?.product?.brand} </p>
                                                        <p><strong>Mô tả sản phẩm :</strong> {productInfo?.product?.long_description} </p>
                                                        <p><strong>Cửa hàng</strong> Paradise pet</p>
                                                    </div>
                                                </div>
                                                <div className="item_comments item">
                                                    <div className="item_comments-title">
                                                        <span>Đánh giá của khách hàng về <strong> {productInfo?.product.name}
                                                        </strong>:</span>
                                                        <div className="item_comments-info mtop-50">
                                                            {
                                                                productInfo?.rate?.map((o, i) => (
                                                                    <div className="container mbottom-20 flex justify_start" key={i}>
                                                                        <div className="ava">
                                                                            <img src="/img/do-cong-nghe-cho-thu-cung-tai-yolo.png" alt="" />
                                                                        </div>
                                                                        <div className="rates">
                                                                            <p>
                                                                                <ReactStar size={30} edit={false} value={o.star} />
                                                                                {/* <i className="fas fa-star txt-yellow" />
                                                                                <i className="fas fa-star txt-yellow" />
                                                                                <i className="fas fa-star txt-yellow" />
                                                                                <i className="fas fa-star txt-yellow" />
                                                                                <i className="fas fa-star txt-yellow" /> */}
                                                                            </p>
                                                                            <p>
                                                                                <strong>{o.customer}     </strong>
                                                                            </p>
                                                                            <p>
                                                                                {o.content}
                                                                            </p>
                                                                            <p />
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
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
                                    {
                                        productsRelated?.map((o, i) => (
                                            <div className="col-lg-3 item_relate" key={i}>
                                                <Link to={`/product/detail/${o?.slug}`}>
                                                    <div className="product_item">
                                                        <div className="product_item-img">
                                                            <img src={o?.imageRepresent?.[0]?.url} alt="" />
                                                        </div>
                                                        <div className="product_item-content">
                                                            <div className="item_content"> {o?.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="col-lg-3 item_relate">
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
                                    </div> */}
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
