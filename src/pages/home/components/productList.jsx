import React from 'react'
import { Link } from 'react-router-dom';
import ProductHomeItem from './productHomeItem';

export default function ProductList({ title, data }) {
    return (
        <section className="section">
            <div className="pet-care-product">
                <div className="row row-small">
                    <div className="col-lg-12">
                        <h2 className="content-product">
                            <span>{title}</span>
                            <Link to="/shop">Xem thêm <i className="fas fa-chevron-right" /></Link>
                        </h2>
                    </div>
                    {
                        data.map((value,key)=>(
                            <ProductHomeItem 
                            key={key}
                            img={value.img}
                            type={value.type}
                            name ={value.name}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
