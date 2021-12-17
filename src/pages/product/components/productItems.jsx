import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({data }) {
    return (
        <div className="col-lg-3 col-5 col-xs-4 item">
            <Link to={`/product/detail/${data.slug}`} >
                <div className="product_item">
                    <div className="product_item-img">
                        <img src={data.imageRepresent[0].url} alt="" />
                    </div>
                    <div className="product_item-content">
                        {/* <div className="item_kind">  </div> */}
                        <div className="item_content">
                            {data.name}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
