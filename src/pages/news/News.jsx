import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import img from '../../assets/img/cac-loai-cho-thuong-so-ot-300x225.png'

export default function News() {
  return (
    <main>
      <div className='section-news'>
        <div className="pet-care-product">
          <div className="row row-small">
            <div className="col-lg-12">
              <h4 className="content-product">
                <span> Tin tức về thú cưng mới nhất </span>
              </h4>
            </div>
            <div className="col col-6 col-lg-8 mb-5">
              <a href="#">
                <div className="news-item h-100">
                  <img src={img} alt="" className='h-100' />
                </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col col-6 col-lg-12 mb-5">
                  <a href="#"><div className="news-item">
                    <img src={img} alt="" />
                  </div>
                    <div className="news-item-content text-center ">
                      <p className="title font-weight-bold">Tiêu đề</p>
                      <p className="mainContent font-weight-light"> Nội dung </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col col-6 col-lg-12 mb-5">
                  <a href="#"><div className="news-item">
                    <img src={img} alt="" />
                  </div>
                    <div className="news-item-content text-center ">
                      <p className="title font-weight-bold">Tiêu đề</p>
                      <p className="mainContent font-weight-light"> Nội dung </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-6 col-lg-3 mb-5">
              <a href="#"><div className="news-item">
                <img src={img} alt="" />
              </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
            <div className="col col-6 col-lg-3 mb-5">
              <a href="#"><div className="news-item">
                <img src={img} alt="" />
              </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
            <div className="col col-6 col-lg-3 mb-5">
              <a href="#"><div className="news-item">
                <img src={img} alt="" />
              </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
            <div className="col col-6 col-lg-3 mb-5">
              <a href="#"><div className="news-item">
                <img src={img} alt="" />
              </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
            <div className="col col-6 col-lg-3 mb-5">
              <a href="#"><div className="news-item">
                <img src={img} alt="" />
              </div>
                <div className="news-item-content text-center ">
                  <p className="title font-weight-bold">Tiêu đề</p>
                  <p className="mainContent font-weight-light"> Nội dung </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
