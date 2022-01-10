import React from 'react'
import img from '../assets/img/loading_2.gif'

export default function Loading() {
  return (
    <div className="loading" id='loading'>
      <div className="load" id='load'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
