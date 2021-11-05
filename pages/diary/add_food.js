import React from "react";
import { useState } from "react";
import Link from 'next/link'

import Products from "./products";
import Cart from "./cart";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
 
function AddFood() {
  // Page 이동
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  // Count
  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="AddFood"
          style={{border: 'solid 2px lightgray', borderRadius: '5px'}}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: '16px'
        }}
      >
        <div>
            <span>아침</span>
            <a className="ui teal circular label"
                onClick={() => navigateTo(PAGE_CART)}>
              {getCartTotal()}
            </a>
        </div>

        <Link href='/diary/add_food_detail'>
          <button className="yellow ui button">
              추가 완료
          </button>
        </Link>
        
      </div>
      
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} page={page} setPage={setPage} />
      )}
      
    </div>
  );
}

export default AddFood;
