import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Layout/Layout.scss"

export default function SingleProduct() {
    const id = +window.location.href.split('/')[4]
    const [single_product, setSingleProduct] = useState({})
    useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res)
            setSingleProduct(res.data)
    })  
    },[])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card">
          <div className="box col-md-6">
            <div className='card-header'>
              <img src={single_product.image} className="photo" alt="" />
            </div>
            <div className="card-footer">
              <div className="texts">
                <h1 className="first_text">{single_product.title}</h1>
                <h2 className="price">${single_product.price}</h2>
                <p className="star">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="description">{single_product.description}</p>
              </div>
            </div>
          </div>
            <div className='btns'>
              <button className='btn1'>Savatga</button>
              <button className='btn11'>Harid qilish</button>
            </div>
        </div>
      </div>
    </div>
  );
}

