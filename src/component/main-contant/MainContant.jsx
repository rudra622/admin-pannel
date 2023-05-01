import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashBoard from '../Dashboard/DashBoard'
import Admin from '../Admin/Admin'
import Product from '../product/Product'
import EditProduct from '../product/EditProduct'
import './MainContant.css'
import { useDispatch } from 'react-redux'
import { GetProductsAsync, getProductsAsync } from '../../service/action/ProductAction'

function MainContant({handleSideBar,handle}) {

  const navigate =useNavigate()
  const dispatch = useDispatch()

  const getLoginDetails =()=>{

    let data =JSON.parse(sessionStorage.getItem("LoginData"));

    if(data == null){
      navigate('/login')
    }else{
      navigate('/');
    }
  }
  useEffect(()=>{
    getLoginDetails()
    dispatch(getProductsAsync())
    dispatch(GetProductsAsync())
  },[])
  return (
    <>
      <div className='col m'> 
      <Header handleSideBar={handleSideBar} handle={handle} />
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/editproduct' element={<EditProduct/>}/>u
      </Routes>
      </div>
    </>
  )
}

export default MainContant