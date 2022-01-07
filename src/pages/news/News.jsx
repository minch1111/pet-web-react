import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import img from '../../assets/img/cac-loai-cho-thuong-so-ot-300x225.png'
import shopServices from '../../services/shopService'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function News() {
  const [listNews, setListNews] = useState()
  useEffect(async () => {
    let res = await shopServices.getListNews()
    if (res.success) { console.log(`res`, res); setListNews(res.news) }
  }
    , [])
  // if (!listNews) return <div className="col-lg-12">Loading... </div>
  return (
    <main>
      <div className='section-news'>
        <div className="pet-care-product">
          {
            !listNews ? (<div className="row row-small">
              <div className="col-lg-12">
                <h4 className="content-product">
                  <span> Tin tức về thú cưng mới nhất </span>
                </h4>
              </div>
              <div className="col col-6 col-lg-8 mb-5">
                <a href="#">
                  <div className="news-item" style={{ height: '427px' }}>
                    <Skeleton
                      className='h-100 w-100'
                    />
                  </div>
                  <div className="news-item-content text-center ">
                    <Skeleton
                      width={600}
                    />
                    {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <div className="row" >
                  <div className="col col-6 col-lg-12 mb-3">
                    <a href="#"><div className="news-item">
                      <Skeleton
                        height={190}

                      />
                    </div>
                      <div className="news-item-content text-center ">
                        <Skeleton width={200} />
                        {/* <p className="mainContent font-weight-light"> Nội dung {i} </p> */}
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row" >
                  <div className="col col-6 col-lg-12 mb-3">
                    <a href="#"><div className="news-item">
                      <Skeleton
                        height={190}
                      />
                    </div>
                      <div className="news-item-content text-center ">
                        <Skeleton width={200} />
                        {/* <p className="mainContent font-weight-light"> Nội dung {i} </p> */}
                      </div>
                    </a>
                  </div>
                </div>

              </div>
              <div className="col col-6 col-lg-3 mb-5">
                <a href="#"><div className="news-item">
                  <Skeleton
                  height={190}
                  />
                </div>
                  <div className="news-item-content text-center ">
                    <Skeleton width={200} />
                    {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                  </div>
                </a>
              </div>
              <div className="col col-6 col-lg-3 mb-5">
                <a href="#"><div className="news-item">
                  <Skeleton
                    height={190}
                  />
                </div>
                  <div className="news-item-content text-center ">
                    <Skeleton width={200} />
                    {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                  </div>
                </a>
              </div>
              <div className="col col-6 col-lg-3 mb-5">
                <a href="#"><div className="news-item">
                  <Skeleton
                    height={190}
                  />
                </div>
                  <div className="news-item-content text-center ">
                    <Skeleton
                     width={200}
                    />
                    {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                  </div>
                </a>
              </div>
              <div className="col col-6 col-lg-3 mb-5">
                <a href="#"><div className="news-item">
                  <Skeleton
                    height={190}
                  />
                </div>
                  <div className="news-item-content text-center ">
                    <Skeleton width={200} />
                    {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                  </div>
                </a>
              </div>
            </div>
            ) :
              <div className="row row-small">
                <div className="col-lg-12">
                  <h4 className="content-product">
                    <span> Tin tức về thú cưng mới nhất </span>
                  </h4>
                </div>
                <div className="col col-6 col-lg-8 mb-5">
                  <Link to={`/news/${listNews[0].slug}`}>
                    <div className="news-item" style={{ height: '427px' }}>
                      <img src={listNews[0].image.url} alt="" className='h-100' />
                    </div>
                    <div className="news-item-content text-center ">
                      <p className="title font-weight-bold">{listNews[0].title}</p>
                      {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  {
                    listNews.map((o, i) => (
                      i === 1 || i === 2 ?
                        <div className="row" key={i}>
                          <div className="col col-6 col-lg-12 mb-3">
                            <Link to={`/news/${o.slug}`}><div className="news-item">
                              <img src={o.image.url} alt="" />
                            </div>
                              <div className="news-item-content text-center ">
                                <p className="title font-weight-bold"> {o.title} </p>
                                {/* <p className="mainContent font-weight-light"> Nội dung {i} </p> */}
                              </div>
                            </Link>
                          </div>
                        </div> : null
                    ))
                  }

                </div>
                {
                  listNews.map((o, i) => (
                    i > 2 ? <div className="col col-6 col-lg-3 mb-5">
                      <Link to={`/news/${o.slug}"`}><div className="news-item">
                        <img src={o.image.url} alt="" />
                      </div>
                        <div className="news-item-content text-center ">
                          <p className="title font-weight-bold"> {o.title} </p>
                          {/* <p className="mainContent font-weight-light"> Nội dung </p> */}
                        </div>
                      </Link>
                    </div> : null
                  ))
                }
              </div>
          }

        </div>
      </div>

    </main>
  )
}
