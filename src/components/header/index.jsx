import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Context } from '../../App'
import { LOGOUT } from '../../store/type'
import HeaderCart from './components/headerCart'
import Nav from './components/nav'
import Search from './components/search'
import avatar from '../../assets/img/avatar.png'
let $ = window.$



export default function Header(props) {

  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const loginBtn = () => {
    document.body.classList.toggle('login-is-show');
    document.querySelector(".login_form").style.display = 'block'
  }
  const registerBtn = () => {
    document.body.classList.toggle('login-is-show');
    document.querySelector(".register_form").style.display = 'block'
  }
  // const { user,logout } = useContext(Context);

  const handleLogout = () => {
    // logout();
    dispatch({type:LOGOUT})
  }
  const getLastName =(fullname)=>{
    // let detail = []
    let detail = fullname.split(' ');
    // console.log(`detail`, detail)
    return detail[detail.length-1]
  }

  return (
    <>
      <header className="header">
        <div className="header-sales">
          <p><span>GIẢM NGAY 20%</span> khi đặt hàng tại <span>PARADISE PET</span> khi nhập mã PARPET20</p>
        </div>
        <div className="header-shipping">
          <p><span>FREE SHIP</span> với đơn hàng trên <span>300k</span></p>
        </div>
        <div className="header_main container-fluid">
          <div className="header_main-logo">
            <Link to="/">
              <img src="/img/logoPet.png" alt="logo" />
            </Link>
          </div>
          <Nav />
          <Search />
          {
            !user ? (
              <div className="header_main-user after">
                <div className="user-login">
                  <i className="fas fa-user" />
                </div>
                <div id="user">
                  <div className="user_info">
                    <div className="user_info-sign up after" onClick={registerBtn}>
                      <span>Sign Up</span>
                    </div>
                    <div className="user_info-sign in" onClick={loginBtn}>
                      <span>Sign In <i className="fas fa-arrow-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="header_main-user login pad-10 flex align_center after">
                <div className="user_avatar">
                  <img src={user?.avatar?.url?user?.avatar?.url:user.avatar||avatar} alt="" />
                </div>
                <div className="user_name pad-10">
                  <p> {getLastName(user?.name)} </p>
                </div>
                <div id="user">
                  <div className="user_container">
                    <div className="user_item info pad-10">
                      <Link to="/user-profile">Thông tin tài khoản</Link>
                    </div>
                    <div className="user_item logout pad-10">
                      <a href="#" onClick={handleLogout}>Đăng xuất</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }


          {/* <div class="header_main-cart after">
                <div class="cart">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="cart_number">
                        <span>0</span>
                    </div>
                </div>
            </div> */}
          <HeaderCart />
          <div className="header_main-menuX">
            <div className="menuX">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
      <div className="offset_height">
      </div>
      <div className="header_search hiden">
        <div className="header_search-container padd-20">
          <input type="text" placeholder="Tìm kiếm ..." />
          <div className="find_btn-3"><i className="fas fa-search" /></div>
        </div>
      </div>

    </>
  )
}
