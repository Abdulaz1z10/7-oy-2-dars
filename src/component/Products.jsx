import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Layout/Layout.scss"

export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
    });
  },[])
  return (
    <div className='container-fluid'>
    <div className="row">
      {
        products.map((item, index)=>{
          return (
            <div className="col-3 my-3">
              <div className="card">
                <div className="card-body">
                  <img
                    src={item.image}
                    className="photo1 w-50  mx-5"
                    alt="product"
                    lazy="loading"
                  />
                </div>
                <div className="card-footer">
                  <Link>
                    <span>{index + 1}</span>.<span>{item.title}</span>
                  </Link>
                </div>
                <Link
                  to={`/single_product/${item.id}`}
                  className="btn btn-success"
                >
                  View details
                </Link>
              </div>
            </div>
          );
        })
      }
    </div>
    </div>
  )
}
