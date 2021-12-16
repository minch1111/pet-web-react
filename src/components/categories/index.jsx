import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import shopService from '../../services/shopService'
let $ = window.$



function Categories() {
    const [category, setCategory] = useState()
    useEffect(async () => {
        let res = await shopService.getAllCategory()
        await setCategory(res.category)
    }, [])

    useEffect(() => {
        // $('#items_dog').on('click', () => {
        //     $('.dog_tab').toggleClass('active')
        //     $('.dog').toggleClass('active');
        //     $('#items_dog').toggleClass('turn')
        // })
        // // $('#items_cho').on('click', () => {
        // //     $('.cho_tab').toggleClass('active')
        // //     $('.cho').toggleClass('active');
        // //     $('#items_cho').toggleClass('turn')
        // // })
        // $('#items_cat').on('click', () => {
        //     $('.cat_tab').toggleClass('active')
        //     $('.cat').toggleClass('active');
        //     $('#items_cat').toggleClass('turn')
        // })
        $('#fashion').on('click', () => {
            $('.fashion_tab').toggleClass('active')
            $('.fashion').toggleClass('active');
            $('#fashion').toggleClass('turn')
        })
    }, [])

    let { path, url } = useRouteMatch()
    // console.log(`url`, url)
    return (
        <div className="col-lg-3">
            <div className="product_title">
                <span>Danh mục sản phẩm</span>
            </div>
            <div className="products_tabs">
                {
                    category?.map((o, i) => (
                        <CategoryItem
                            key={i}
                            data={o}
                        />
                    ))
                }

                {/* <div>
                    <div className="product_tab-item dog_tab">
                        <a href="#">
                            <div className="product_tab-item-title font-500">
                                <span>Chó</span>
                            </div>
                        </a>
                        <i className="fas fa-chevron-down product_tab-item-follow" id="items_dog" />
                    </div>
                    <div className="items_follow dog">
                        <ul>
                            <li><a className="after mbottom-10" href="#">Thức ăn cho Chó</a></li>
                            <li><a className="after mbottom-10" href="#">Dụng cụ ăn uống cho Chó</a></li>
                            <li><a className="after mbottom-10" href="#">Chuồng cho Chó</a></li>
                            <li><a className="after mbottom-10" href="#">Thuốc tẩy giun, sán cho Chó</a></li>
                        </ul>
                    </div>
                </div> */}
                {/* <div className="product_tab-item cat_tab">
                    <a href="#">
                        <div className="product_tab-item-title font-500">
                            <span>Mèo</span>
                        </div>
                    </a><i className="fas fa-chevron-down" id="items_cat" />
                </div>
                <div className="items_follow cat">
                    <ul>
                        <li><a className="after mbottom-10" href="#">Thức ăn cho Mèo</a></li>
                        <li><a className="after mbottom-10" href="#">Dụng cụ ăn uống cho Mèo</a></li>
                        <li><a className="after mbottom-10" href="#">Chuồng cho Mèo</a></li>
                        <li><a className="after mbottom-10" href="#">Thuốc tẩy giun, sán cho Mèo</a></li>
                    </ul>
                </div> */}
                <div className="product_tab-item fashion_tab">
                    <a href="#">
                        <div className="product_tab-item-title font-500">
                            <span>Trang Phục</span>
                        </div>
                    </a><i className="fas fa-chevron-down" id="fashion" />
                </div>
                <div className="items_follow fashion">
                    <ul>
                        <li><a className="after mbottom-10" href="#">Áo</a></li>
                        <li><a className="after mbottom-10" href="#">Quần</a></li>
                        <li><a className="after mbottom-10" href="#">Váy, Đầm</a></li>
                        <li><a className="after mbottom-10" href="#">Giày Dép</a></li>
                        <li><a className="after mbottom-10" href="#">Kính</a></li>
                    </ul>
                </div>
            </div>
            <div className="product_title">
                <span>Danh mục Dịch vụ</span>
            </div>
            <div className="products_tabs">
                <div className="product_tab-item">
                    <a href="#">
                        <div className="product_tab-item-title">
                            <span>Trông giữ thú cưng</span>
                        </div>
                    </a>
                </div>
                <div className="product_tab-item">
                    <a href="#">
                        <div className="product_tab-item-title">
                            <span>Khắc thẻ tên thú cưng</span>
                        </div>
                    </a>
                </div>
                <div className="product_tab-item">
                    <a href="#">
                        <div className="product_tab-item-title">
                            <span>Hoả táng thú cưng</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Categories

export const CategoryItem = ({ data }) => {
    const [listSubcategory, setListSubcategory] = useState()
    const handleClick = () => {
        document.querySelector(`.${data.slug}_tab`).classList.toggle('active')
        document.querySelector(`.${data.slug}`).classList.toggle('active')
        document.querySelector(`#items_${data.slug}`).classList.toggle('turn')
        // console.log('click');
    }
    useEffect(async () => {
        let res = await shopService.getListSubCateGoryByIdCate(data._id)
        await setListSubcategory(res.subCategory)
    }, [])
    // console.log(`listSubcategory`, listSubcategory)
    return (
        <div>
            <div className={`product_tab-item ${data.slug}_tab`}>
                <Link to={`/shop/${data.slug}`}>
                    <div className="product_tab-item-title font-500">
                        <span> {data.name} </span>
                    </div>
                </Link>
                <i className="fas fa-chevron-down product_tab-item-follow" id={`items_${data.slug}`} onClick={handleClick} />
            </div>
            <div className={`items_follow ${data.slug}`}>
                <ul>
                    {
                        listSubcategory?.map((o, i) => (
                            <li key={i}><Link className="after mbottom-10" to={`/shop/${data.slug}/${o.slug}`}>{o.name}</Link></li>
                        ))
                    }
                    {/* <li><a className="after mbottom-10" href="#">Thức ăn cho Chó</a></li>
                    <li><a className="after mbottom-10" href="#">Dụng cụ ăn uống cho Chó</a></li>
                    <li><a className="after mbottom-10" href="#">Chuồng cho Chó</a></li>
                    <li><a className="after mbottom-10" href="#">Thuốc tẩy giun, sán cho Chó</a></li> */}
                </ul>
            </div>
        </div>
    )
}
