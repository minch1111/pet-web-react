import React, { useEffect } from 'react'
let $=window.$
export default function Sliders() {
    
    useEffect(()=>{
        $('.container-sliders').flickity({
            cellAlign: 'center',
            wrapAround: true,
            prevNextButtons: false,
            contain: true,
            pageDots: false,
            adaptiveHeight: true,
            autoPlay: 2000,
            on: {
              ready: function () {
                let dotted = $('.flickity-page-dots'),
                  paging = ('.slider-bottom .dotted')
                dotted.appendTo(paging);
              }
            }
          })
          
          function a(a) {
            if ($(a).next().hasClass('flickity-viewport')) {
              $('.slider-item-text').fadeIn(0.5)
            }
          }
    },[])
    return (
        <section id="js-scroll" data-scroll-container>
            <div className="sliders">
                <div className="container-sliders">
                    <div className="slider-item carousel-cell">
                        <img src="/img/slider_1.png" alt="" />
                        <div className="slider-item-content">
                            <div className="cat">
                                <img src="/img/ezgif.com-gif-maker.gif" alt="" />
                            </div>
                            <div className="dog">
                                <img src="/img/ezgif.com-gif-maker (1).gif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-item carousel-cell">
                        <img src="/img/slider_2.png" alt="" />
                        <div className="slider-item-content">
                            <div className="cat">
                                <img src="/img/ezgif.com-gif-maker.gif" alt="" />
                            </div>
                            <div className="dog">
                                <img src="/img/ezgif.com-gif-maker (1).gif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-item carousel-cell">
                        <img src="/img/slider_3.png" alt="" />
                        <div className="slider-item-content">
                            <div className="cat">
                                <img src="/img/ezgif.com-gif-maker.gif" alt="" />
                            </div>
                            <div className="dog">
                                <img src="/img/ezgif.com-gif-maker (1).gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
