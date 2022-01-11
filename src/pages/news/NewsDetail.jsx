import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import shopService from '../../services/shopService'
import ReactLoading from "react-loading";
let $ = window.$

export default function NewsDetail() {
  let [newsDetail, setNewsDetail] = useState()
  let { slug } = useParams()
  useEffect(async () => {
    window.scrollTo(0, 0)
    let res = await shopService.getNewsDetail(slug)
    if (res.success) setNewsDetail(res.news)
  }, [])

  console.log(`newsDetail`, newsDetail)
  const convertHTML = (data) => {
    let htmlObject = document.getElementsByClassName('news-content')
    return htmlObject.innerHTML = data
  }
  if (!newsDetail) return <div className='flex justify_center'><ReactLoading type='spokes' color='#ffa42b' /></div>
  return (
    <main>
      <div className="section-newsDetail">
        <div className="news-title mb-3">
          <h2> {newsDetail?.title} </h2>
          <span> Tác giả : {newsDetail?.author} </span>
        </div>

        <div className="news-content" >
          <h5>{newsDetail?.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: newsDetail?.content }}>
          </div>
        </div>
      </div>
    </main>
  )
}
