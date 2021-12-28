// $(window).on('load', function () {
//   $('.loading').fadeOut(5000, function () {
//     $('.load').fadeOut(2000);
//   });
// })
AOS.init({
  duration: 1200,
})


$('.container-sliders').flickity({
  cellAlign: 'center',
  wrapAround: true,
  prevNextButtons: true,
  contain: true,
  pageDots: true,
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

// window.onscroll=function(){myFunction()};
// function myFunction(){
//   if(document.body.scrollTop>2462 || document.documentElement.scrollTop>2462)
//   {
//     $('.tecnical-tit').fadeIn(2000);
//     $('."techincal-tit-content"').fadeIn(5000);
//     $('.bot-content').fadeIn(8000);
//   }
// }


// $('.info-sliders').flickity({
//   cellAlign : 'center',
//   wrapAround : true,
//   prevNextButtons :true,
//   contain:true,
//   pageDots: false,
//   adaptiveHeight:true,
//   autoPlay:10000,
//   on :{
//    ready: function(){
//      let dotted = $('.flickity-page-dots'),
//      paging = ('.slider-bottom .dotted')
//      dotted.appendTo(paging);
//    }
//  }
// })
const btnFind = $('.find_btn-2');
btnFind.on('click', () => {
  $('.header_search').toggleClass('open_down');
})
$('.info-sliders').flickity({
  cellAlign: 'left',
  wrapAround: true,
  preNextButtons: true,
  contain: true,
  pageDots: false,
  on: {
    ready: function () {
      let dotted = $('.flickity-page-dots'),
        paging = ('.slider-bottom .dotted')
      dotted.appendTo(paging);
    }
  }
})

$('.brand-sliders').flickity({
  cellAlign: 'center',
  wrapAround: true,
  prevNextButtons: false,
  contain: true,
  pageDots: false,
  adaptiveHeight: true,
  autoPlay: 5000,
  on: {
    ready: function () {
      let dotted = $('.flickity-page-dots'),
        paging = ('.slider-bottom .dotted')
      dotted.appendTo(paging);
    }
  }
})
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 1000) {
    var petItem = document.querySelectorAll('.pet-care-item');
    $(petItem).removeData('aos');

  }
})
var o = $('.menuX');
o.on('click', function () {
  o.toggleClass('open')
  $('.header-fix').toggleClass('open')


  // var oItem = $('.menu')
  // oItem.on('click',function(){
  //     oItem.toggleClass('open');
  //     $('.header_menu-list').toggleClass('open');
  // })
  $('.item_user').on('click', () => {
    document.querySelector('.user_menu').style.display = "block";
    $('.header_menu-list').toggleClass('open');
  })
  $('.item_dog').on('click', () => {
    document.querySelector('.dog_menu').style.display = "block";
    $('.header_menu-list').toggleClass('open');
  })
  $('.menu_item-1').on('click', () => {
    $('.item-1').toggleClass('openItem');
    $('.menu_item-1').toggleClass('turn');
  })
  $('.menu_item-2').on('click', () => {
    $('.item-2').toggleClass('openItem');
    $('.menu_item-2').toggleClass('turn');
  })
  $('.item_cat').on('click', () => {
    document.querySelector('.cat_menu').style.display = "block";
    $('.header_menu-list').toggleClass('open');
  })
  $('.item_services').on('click', () => {
    document.querySelector('.services_menu').style.display = "block";
    $('.header_menu-list').toggleClass('open');
  })
  $('.item_news').on('click', () => {
    document.querySelector('.news_menu').style.display = "block";
    $('.header_menu-list').toggleClass('open');
  })


  let back = $('.back')
  back.on('click', () => {
    $('.header_menu-list').toggleClass('open');
    var elems = document.getElementsByClassName('menu_list');
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = 'none';
    }
    $('.menu_item').removeClass('openItem');
    $('.menu_item-1').removeClass('turn');
  })
  if (!o.hasClass('open') && $('.header_menu-list').hasClass('open')) {
    setTimeout(function () { $('.header_menu-list').removeClass('open') }, 500)
    var elems = document.getElementsByClassName('menu_list');
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = 'none';
    }
    // if($('.meu_item').hasClass('openItem')){
    $('.menu_item').removeClass('openItem');
    $('.menu_item-1').removeClass('turn');
  }
})
const cart = $('.cart');
cart.on('click', () => {
  $('.header_cart-sidebar').toggleClass('open-cart');
})
$('.cart_close').on('click', () => {
  $('.header_cart-sidebar').toggleClass('open-cart');
})


$('#items_dog').on('click', () => {
  $('.dog').toggleClass('active');
  $('#items_dog').toggleClass('turn')
})
$('#items_cat').on('click', () => {
  $('.cat').toggleClass('active');
  $('#items_cat').toggleClass('turn')
})
$('#fashion').on('click', () => {
  $('.fashion').toggleClass('active');
  $('#fashion').toggleClass('turn')
})


$('.brand-sliders').flickity({
  cellAlign: 'center',
  wrapAround: true,
  prevNextButtons: false,
  contain: true,
  pageDots: false,
  adaptiveHeight: true,
  autoPlay: 5000,
  on: {
    ready: function () {
      let dotted = $('.flickity-page-dots'),
        paging = ('.slider-bottom .dotted')
      dotted.appendTo(paging);
    }
  }
})

// window.addEventListener('scroll',function(){
//   if(document.documentElement.scrollTop>0)
//   {
//     this.document.querySelector('.header-container').classList.add('fix-header');
//   }
//   else
//   {
//     this.document.querySelector('.header-container').classList.remove('fix-header');
//   }
// })
// window.addEventListener('scroll',function(){
//   if(document.documentElement.scrollTop>0){
//       document.querySelector('.header').classList.add('fix-header');
//   }
//   else
//   {
//    document.querySelector('.header').classList.remove('fix-header');
//   }
// })
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector('.btn-to-Top').classList.add('fix');
  }
  else {
    document.querySelector('.btn-to-Top').classList.remove('fix');
  }
})
const btn = document.querySelector('.fix-to-top');
$(btn).click(function () {
  window.scrollBy(
    {
      top: -document.body.offsetHeight,
      behavior: 'smooth'
    }
  )
})


// $('.btn-plus').on('click', function () {
//   $('.number').val(parseInt($('.number').val()) + 1);
// });
// $('.btn-minus').on('click', function () {
//   $('.number').val(parseInt($('.number').val()) - 1);
//   if ($('.number').val() == 0) {
//     $('.number').val(1);
//   }
// });

$('.btn-add').on('click', function () {
  alert("Bạn đã thêm " + $('.number').val() + " sản phẩm này vào giỏ hàng")
  console.log(tabs)
})

const imgTabs = document.querySelectorAll('.imgTab');
const itemTabs = document.querySelectorAll('.imgItem');

imgTabs.forEach((tab, index) => {
  const itemTab = itemTabs[index];

  tab.onclick = function () {
    $('.imgTab.active').removeClass('active');
    $('.imgItem.active').removeClass('active');

    $(tab).addClass('active');
    $(itemTab).addClass('active')
  }
})

const tabs = document.querySelectorAll('.tab_title');
const items = document.querySelectorAll('.item');

tabs.forEach((tab, index) => {
  const item = items[index];

  tab.onclick = function () {
    $('.tab_title.active').removeClass('active');
    $('.item.active').removeClass('active');

    $(tab).addClass('active');
    $(item).addClass('active')
  }
})

$(function () {
  $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' }).val();
});

const tabItems = document.querySelectorAll(".tab_item");
const tabContentItems = document.querySelectorAll(".tab_content-item");
console.log(`tabContentItems`, tabContentItems)

tabItems.forEach((tab, index) => {
  const item = tabContentItems[index];

  tab.onclick = function () {
    console.log(`tab`, tab)
    $('.tab_item.active').removeClass('active');
    $('.tab_content-item.active').removeClass('active');

    $(tab).addClass('active');
    $(item).addClass('active')
  }
})