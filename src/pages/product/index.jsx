import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from '../../App'
import Categories from '../../components/categories'
import shopService from '../../services/shopService'
import ProductItem from './components/productItems'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Product() {
  // let productItems = [
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   },
  //   {
  //     name:"Pate Tươi rau củ dành cho chó",
  //     title:"Thức ăn cho chó",
  //     img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
  //   }

  // ]
  const { search,formSearch } = useContext(Context);
  console.log(`search`, formSearch)
  const [productItems, setproductItems] = useState()
  let { slug } = useParams()
  let { url } = useRouteMatch()
  let loader = [0, 1, 2, 3, 4, 5, 6, 7]
  // console.log((url.match(new RegExp("/","g"))||[]).length);
  // console.log(`url`, url)
  // console.log(`url.charAt(url.length)`, url.charAt(url.length - 1))
  // console.log(`slug`, slug)
  useEffect(async () => {
    window.scrollTo(0, 0)
    if(formSearch){
      let res = await shopService.getListProductBySearch(formSearch.search)
      await setproductItems(res.products)
    }
    else if (slug !== '') {
      setproductItems()
      if ((url.match(new RegExp("/", "g")) || []).length < 3) {
        let res = await shopService.getListProductByCategory(slug)
        await setproductItems(res.product)
      }
      // await console.log(`res`, res)
      else {
        if (url.charAt(url.length - 1) === '/') {
          let res = await shopService.getListProductByCategory(slug)
          await setproductItems(res.product)
        }
        else {
          let res1 = await shopService.getListProductBySubCategory(slug)
          await setproductItems(res1.product)
        }
      }
    }

  }, [slug,formSearch.search])
  // if (!productItems) return <div> Loading... </div>
  console.log(`productItems`, productItems)
  return (
    <main>
      <section className="section">
        <div className="products">
          <div className="product_container">
            <div className="row">
              <div className="col-lg-12">
                <div className="products_links">
                  <div className="products_links-item">
                    <h4 className='text-uppercase'>PARADISE PET SHOP / SHOP CHO {slug}</h4>
                  </div>
                  <div className="products_links-select">
                    <select id="select_products" name>
                      <option value={0}>Thứ tự mặc định</option>
                      <option value={1}>Mới nhất</option>
                      <option value={2}>Theo giá : từ thấp đến cao</option>
                      <option value={3}>Theo giá : từ cao đến thấp</option>
                      <option value={4}>Theo đánh giá</option>
                    </select>
                  </div>
                </div>
              </div>
              <Categories />
              <div className="col-lg-9">
                <div className="products_listitems">
                  <div className="row">
                    {productItems ?
                      productItems.map((value, key) => (
                        <ProductItem
                          key={key}
                          // title = {value.title}
                          // name={value.name}
                          // img = {value.img}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
