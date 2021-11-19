import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'
import Categories from '../../components/categories'
import ProductItem from './components/productItems'

export default function Product() {
  let productItems = [
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    },
    {
      name:"Pate Tươi rau củ dành cho chó",
      title:"Thức ăn cho chó",
      img :"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png"
    }

  ]
  const {listProductInfo} = useContext(Context);
  return (
    <main>
      <section className="section">
        <div className="products">
          <div className="product_container">
            <div className="row">
              <div className="col-lg-12">
                <div className="products_links">
                  <div className="products_links-item">
                    <h4>PARADISE PET SHOP / SHOP CHO CHÓ</h4>
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
                    {
                      listProductInfo.map((value,key)=>(
                        <ProductItem 
                        key={key}
                        title = {value.title}
                        name={value.name}
                        img = {value.img}
                        data= {value}
                        />
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
