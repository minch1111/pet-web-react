import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import "../../assets/css/profile.css"
import AccountInfo from './component/accountInfo';
import AnnouceList from './component/annouceList';
import Ordered from './component/orderedList';
import VoucherList from './component/voucherList';
import OrderDetail from './component/OrderDetail';

function Profile() {
  let $ = window.$
  useEffect(() => {
    $(function () {
      $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' }).val();
    });
    // const tabItems = document.querySelectorAll(".tab_item");
    // const tabContentItems = document.querySelectorAll(".tab_content-item");

    // tabItems.forEach((tab, index) => {
    //   const item = tabContentItems[index];

    //   tab.onclick = function () {
    //     $('.tab_item.active').removeClass('active');
    //     $('.tab_content-item.active').removeClass('active');

    //     $(tab).addClass('active');
    //     $(item).addClass('active')
    //   }
    // })
  }, [])
  const { user } = useSelector(store => store.user)
  return (
    <main>
      <section className="section">
        <div className="profile">
          <div className="row">
            <div className="offset-lg-1" />
            <div className="col-lg-2">
              <div className="profile_user ">
                <div className="profile_user-detail flex align_center justify_center mbottom-50">
                  <div className="user-detail--avatar">
                    <img src={user?.avatar?.url || user.avatar} alt="" />
                  </div>
                  <div className="user-detail--name">
                    <p> {user.username} </p>
                  </div>
                </div>
                <div className="profile_user-items flex justify_start">
                  <div className="profile_user-account mbottom-20">
                    <NavLink className="tab_item" to="/user-profile" exact><i className="far fa-user txt-blue" /> Tài khoản
                      của tôi</NavLink>
                  </div>
                  <div className="profile_user-orderlist mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/order"><i className="fas fa-clipboard-list txt-blue" /> Đơn mua
                      của tôi</NavLink>
                  </div>
                  <div className="profile_user-announce mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/announce"><i className="far fa-bell txt-orange" /> Thông báo</NavLink>
                  </div>
                  <div className="profile_user-announce mbottom-20">
                    <NavLink className="tab_item" to="/user-profile/voucher"><i className="fas fa-ticket-alt txt-orange" /> Voucher
                      của tôi</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab_content">
                <Switch >
                  <Route path="/user-profile" exact component={AccountInfo} />
                  <Route path="/user-profile/order" exact component={Ordered} />
                  <Route path="/user-profile/announce" component={AnnouceList} />
                  <Route path="/user-profile/voucher" component={VoucherList} />
                  <Route path="/user-profile/order/:slug" component={OrderDetail}/>
                  {/* <AccountInfo />
                  <Ordered />
                  <AnnouceList />
                  <VoucherList /> */}
                </Switch>
              </div>
            </div>
            <div className="offset-lg-1" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
