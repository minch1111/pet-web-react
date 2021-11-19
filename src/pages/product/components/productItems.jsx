import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ title, name, img,data }) {
    return (
        <div className="col-lg-3 item">
            <Link to={{pathname:`/shop/${data.id}` ,querry:{data}}} >
                <div className="product_item">
                    <div className="product_item-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="product_item-content">
                        <div className="item_kind">{title}</div>
                        <div className="item_content">
                            {name}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
