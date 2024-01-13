import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './component/Products';
import SingleProduct from './component/SingleProduct';

export default function App() {
  return (
    <Routes>
      <Route path='' element={<Products/>}/>
      <Route path='single_product/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}
