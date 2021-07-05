import React, { useState, useEffect } from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Add, Remove, DeleteOutline, ChevronRight } from '@material-ui/icons';
import './myCart.css';
import { useLocation, useParams } from 'react-router';
import { useCart, useDispatchCart } from "../../CartContext/Cart";
import { trendingItem, popularItem, recomendItem } from "../../data";

function MyCart() {

  //const product = { title: "A watch", price: 100, desc: "Men Silver-Toned Analogue Watch WRG00048A", img: "https://static.wixstatic.com/media/2cd43b_4b23db1699ec44f4802c3741398fb42b~mv2.png/v1/fill/w_184,h_184,q_90/2cd43b_4b23db1699ec44f4802c3741398fb42b~mv2.png" }
  // const location = useLocation()
  // const path = location.pathname.split('/')[2];

  const { idInParam } = useParams();

  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + (b.price * b.quantity), 0);
  const totalQuantiy = items.reduce((total, b) => total + (b.quantity), 0);

  //console.log(items, "item");
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const updateCart = (item, type) => {

    if (type == "add") {
      item.quantity += 1;
    } else if (item.quantity > 1) {
      item.quantity -= 1;
    }
    dispatch({ type: "UPDATE", item });
  };

  return (
    <>
      <Topbar />
      {
        items.map((p, index) => (
          <>
            <div className="myCart">
              <div className="imgSection">
                <img className="productImg" src={p.img} />
              </div>
              <div className="productDesc">
                <div className="productName">{p.title}</div>
                <div className="productPrice">${p.price}</div>
                <div className="productQty">
                  <span className="boxl"><Remove onClick={() => updateCart(p, "remove")} /></span>
                  <span>{p.quantity}</span>
                  <span className="boxr"><Add onClick={() => updateCart(p, "add")} /></span>
                  <span className="deleteIcon"> <DeleteOutline onClick={() => handleRemove(index)} /> </span>

                </div>
              </div>
            </div>
          </>
        ))
      }

      <div className="collect">
        {/* <span className="qty">1 items</span>
        <span className="total">$50.00</span> */}
        <span className="qty">{totalQuantiy} items</span>
        <span className="total">${totalPrice}</span>
      </div>
      <div className="footer">
        <span>Proceed to Checkout</span>
        <ChevronRight className="righticon" />
      </div>
    </>
  )
}

export default MyCart

