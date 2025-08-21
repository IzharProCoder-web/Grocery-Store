import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'
import AllProducts from './pages/AllProducts'

import SellerLogin from './component/seller/SellerLogin'
import SellerLayout from './pages/Seller/SellerLayout'
import AddProduct from './pages/Seller/AddProduct'
import ProductList from './pages/Seller/ProductList'
import Order from './pages/Seller/Order'
import ProductCategory from './pages/ProductCategory'
import {Toaster} from 'react-hot-toast'
import ProductDetil from './pages/ProductDetil'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrder'
import ContactUs from './pages/ContactUs'
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <div >
    {isSellerPath ? null : <Navbar />}
     <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`} >
     <Toaster />
      <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/products' element={<AllProducts />}/> 
       <Route path="/products/:category" element={<ProductCategory />} />
       <Route path="/products/:category/:id" element={<ProductDetil />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/add-address" element={<AddAddress />} />
       <Route path="/my-order" element={<MyOrders />} />
       <Route path="/contact" element={<ContactUs />} />
      <Route path='/seller' element={isSellerPath ? <SellerLayout /> : <SellerLogin />} >
      <Route index  element={isSellerPath ? <AddProduct /> : null}/>
      <Route path='/seller/product-list' element={<ProductList />}/>
      <Route path='/seller/orders' element={<Order />}/>

      </Route>
       </Routes>
     </div>
     {isSellerPath ? null :<Footer />}
    </div>
  )
}

export default App
