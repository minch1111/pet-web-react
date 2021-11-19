import React from 'react'

export default function ProductHomeItem({img,type,name}) {
    return (
        <div className="col col-6 col-lg-3 product-item">
            <a href="#"><div className="product-item-img">
                <img src={img} alt="" />
            </div>
                <div className="product-item-content">
                    <p className="kind-food-pet">{type}</p>
                    <p className="title-food"> {name} </p>
                </div></a>
        </div>
    )
}
