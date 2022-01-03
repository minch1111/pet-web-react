
import React from 'react'
import { Link } from 'react-router-dom';
import ProductHomeItem from './productHomeItem';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductList({ title, data,slug }) {
    // console.log(`data`, data[0]?.imageRepresent?.[0].url)
    console.log(`data`, data)
    return (
        <section className="section">
            <div className="pet-care-product">
                <div className="row row-small">
                    <div className="col-lg-12">
                        <h2 className="content-product">
                            <span>{title}</span>
                            <Link to={`/shop/${slug?.slug}`}>Xem thêm <i className="fas fa-chevron-right" /></Link>
                        </h2>
                    </div>
                    {
                        data?
                        data?.map((value,key)=>(
                            <ProductHomeItem
                            key={key}
                            img={value.imageRepresent?.[0].url}
                            name ={value.name}
                            slug={value.slug}
                            />
                        )):(
                            <LoadingProducts />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export const LoadingProducts=()=>{
    return(
        <div className="col col-6 col-lg-3 product-item">
            <a href="#"><div className="product-item-img">
                 <Skeleton height={300} />
            </div>
                <div className="product-item-content">
                    {/* <p className="kind-food-pet">{type}</p> */}
                    <Skeleton width={100} />
                </div></a>
        </div>
    )
}
