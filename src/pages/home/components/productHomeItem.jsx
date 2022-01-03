import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHomeItem({ img, type, name,slug }) {
    return (
        <div className="col col-6 col-lg-3 product-item">
            <Link to={`/product/detail/${slug}`} ><div className="product-item-img">
                <img src={img} alt="" />
            </div>
                <div className="product-item-content">
                    {/* <p className="kind-food-pet">{type}</p> */}
                    <p className="title-food"> {name} </p>
                </div>
            </Link>
        </div>
    )
}
