import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from '../../App'
import Categories from '../../components/categories'
import shopService from '../../services/shopService'
import ProductItem from './components/productItems'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { convertObjectToQuery, convertQueryToObject } from '../../utils'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'

export default function Product() {
  const { search, formSearch, setFormSearch } = useContext(Context);
  // console.log(`search`, formSearch)
  const [productItems, setproductItems] = useState()
  let { slug } = useParams()
  let { url, path } = useRouteMatch()
  let loader = [0, 1, 2, 3, 4, 5, 6, 7]
  let queryURL = convertQueryToObject()
  console.log(`queryURL`, queryURL)


  // console.log((url.match(new RegExp("/","g"))||[]).length);
  // console.log(`url`, url)
  // console.log(`url.charAt(url.length)`, url.charAt(url.length - 1))
  // console.log(`url.match(new RegExp("/", "g"))`, url.match(new RegExp("/", "g")).length)
  // console.log(`slug`, slug)
  console.log(`formSearch`, formSearch)
  console.log(`slug`, slug)
  useEffect(async () => {
    window.scrollTo(0, 0)
    if (slug) {
      // setproductItems()
      if ((url.match(new RegExp("/", "g")) || []).length < 3) {
        let res = await shopService.getListProductByCategory(slug, queryURL.page, queryURL.sort)
        await setproductItems(res)
      }
      // await console.log(`res`, res)
      else {
        if (url.charAt(url.length - 1) === '/') {
          let res = await shopService.getListProductByCategory(slug, queryURL.page, queryURL.sort)
          await setproductItems(res)
        }
        else {
          // console.log("có sub");
          let res1 = await shopService.getListProductBySubCategory(slug, queryURL.page, queryURL.sort)
          await setproductItems(res1)
        }
      }
    }
    else if (formSearch) {
      let res = await shopService.getListProductBySearch(formSearch.search, queryURL.page,queryURL.sort)
      // await setFormSearch()
      await setproductItems(res)

    }
    else{
      let res = await shopService.getAllProducts(queryURL.page);
      await setproductItems(res)
    }


  }, [slug, formSearch, queryURL.page, queryURL.sort])
  // if (!productItems) return <div> Loading... </div>
  const filter = (e) => {
    console.log(`e.target.value`, e.target.value)
  }
  console.log(`productItems`, productItems)
  const showDropdownMenu = () => {
    document.querySelector('.dropdown-menu').classList.toggle('show')
  }
  return (
    <main>
      <section className="section">
        <div className="products">
          <div className="product_container">
            <div className="row">
              <div className="col-lg-12">
                <div className="products_links">
                  <div className="products_links-item">
                    <h4 className='text-uppercase'>PARADISE PET SHOP</h4>
                  </div>
                  <div className="products_links-select">
                    <div className="multi-search">
                      <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" onClick={showDropdownMenu}>
                          Lọc tìm kiếm
                        </button>
                        <div className="dropdown-menu left--100" aria-labelledby="dropdownMenuButton" style={{ left: '-73%' }}>
                          {/* <a className="dropdown-item" href="#">Theo giá</a>
                          <a className="dropdown-item" href="#"> Theo số lượng</a> */}
                          <Link onClick={showDropdownMenu} className='dropdown-item' to={`${url}?${convertObjectToQuery({ ...queryURL, sort: -1 })}`}>Theo giá từ cao đến thấp</Link>
                          <Link onClick={showDropdownMenu} className='dropdown-item' to={`${url}?${convertObjectToQuery({ ...queryURL, sort: 1 })}`}>Theo giá từ thấp đến cao</Link>
                        </div>
                      </div>
                    </div>
                    {/* <select id="select_products" onChange={filter}>
                      <option value="0">Thứ tự mặc định</option>
                      <option value="1">Mới nhất</option>

                      <option value="3">Theo giá : từ cao đến thấp</option>
                      <option value="4">Theo đánh giá</option>
                    </select> */}
                  </div>
                </div>
              </div>
              <Categories />
              <div className="col-lg-9">
                <div className="products_listitems">
                  <div className="row">
                    {productItems ?
                      productItems.product?.map((value, key) => (
                        <ProductItem
                          key={key}
                          data={value}
                        />
                      )) :
                      loader.map((o, i) => (
                        <div className="col-lg-3 col-5 col-xs-4 item mb-3" key={i}>
                          <div className="product_items">
                            <Skeleton
                              count={1}
                              height={200}
                              className='product_item-img flex justify_center'
                            />
                            <div className="product_item-content flex justify-center">
                              {/* <div className="item_kind">  </div> */}
                              <div className="item_content" style={{ marginTop: -18 }}>
                                <Skeleton
                                  count={1}
                                  width={200}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <Pagination totalPage={parseInt(productItems?.pages)} currentPage={parseInt(queryURL.page) || 1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
