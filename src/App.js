import { createContext, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Payment from "./pages/payment";
import Product from "./pages/product";
import Services from "./pages/service";
import News from "./pages/news/News";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Page404 from "./pages/page404";
import ProductDetail from "./pages/productDetail";
import LoginModal from "./components/loginModal";
import PrivateRoute from "./components/PrivateRoute";
export const Context = createContext();

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('loginn'))||null)
  const[formSearch,setFormSearch]=useState()
  const data ={
    username:"Nguyễn Văn A",
    avatar:"https://cdn.dribbble.com/users/19658/screenshots/3576141/media/ca38af59f2434493f8cb9c4229cbfc2e.png?compress=1&resize=400x300",
    cart:[]
  }

  const listProductInfo =[
    {
      id:"pro0001",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"Thức ăn dinh dưỡng cho mèo",
      img:"/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg",
      number:0
    },
    {

      id:"pro0002",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg",
      number:0
    },
    {
      id:"pro0003",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-nutrience-original-healthy-kitten-300x300.jpg",
      number:0
    },
    {
      id:"pro0004",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-nutrience-subzero-fraser-valley-300x300.jpg",
      number:0
    },
    {
      id:"pro0005",
      type:"Thức ăn cho chó",
      name:"Pate Rau củ Tươi dành cho chó",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho chó",
      img:"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png",
      number:0
    },
    {
      id:"pro0006",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/thuc-an-hat-royal-canin-urinary-so-cho-meo-bi-than-300x300.jpg",
      number:0
    },
    {
      id:"pro0007",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-Nutrience-Original-Healthy-Adult-Indoor-300x300.jpg",
      number:0
    },
    {
      id:"pro0008",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-nutrience-original-healthy-kitten-300x300.jpg",
      number:0
    },
    {
      id:"pro0009",
      type:"Thức ăn cho mèo",
      name:"Royal Canin Urinary S/O – Thức Ăn Hạt Cho Mèo Bị Sỏi Thận",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho mèo",
      img:"/img/hinh-san-pham-nutrience-subzero-fraser-valley-300x300.jpg",
      number:0
    },
    {
      id:"pro0010",
      type:"Thức ăn cho chó",
      name:"Pate rau củ tươi dành cho chó",
      price:48.99,
      describe:"thức ăn dinh dưỡng cho chó",
      img:"/img/pate-tuoi-bo-rau-cu-pet-choy-danh-cho-cho-300x300.png",
      number:0
    },

  ]

  const search = (form) => {
    // console.log(`form`, form)
    if(form && form!=='') {setFormSearch(form)}
    else setFormSearch()
  }
  // const login =()=>{
  //   localStorage.setItem('loginn',JSON.stringify(data))
  //   setUser(data)
  // }
  // const logout =()=>{
  //   localStorage.removeItem('loginn');
  //   setUser()
  // }
  // console.log(`data`, data)
  return (
    <div className="App">
      <Router>
        <Context.Provider value={{ user, search,formSearch,listProductInfo, search,setFormSearch }}>
          <Header />
          <LoginModal/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Product} />
            <Route path="/shop/:slug" exact component={Product} />
            <Route path="/shop/:slug/:slug" component={Product} />
            <PrivateRoute path="/cart" exact component={Cart} />
            <Route path="/cart/payment" component={Payment} />
            <PrivateRoute path="/user-profile" component={Profile} />
            <Route path="/services" component={Services} />
            <Route path="/product/detail/:slug" component={ProductDetail} />
            <Route path='/news' component={News} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
