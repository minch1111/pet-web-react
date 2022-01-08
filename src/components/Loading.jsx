import React from 'react'
import img from '../assets/img/loading_2.gif'

export default function Loading() {
  return (
    <div class="loading" id='loading'>
      <div class="load" id='load'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
