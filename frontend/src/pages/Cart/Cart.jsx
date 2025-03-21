// import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();

  const { cartitems, food_list, removefromcart, gettotalcartamount, url } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <br />
        <h1>
          {food_list.map((item, key) => {
            if (cartitems[item._id] > 0) {
              return (
                <div key={key}>
                  <div className="cart-items-title cart-items-item">
                    <img src={url + "/images/" + item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>₹{item.price * cartitems[item._id]} </p>
                    <p
                      onClick={() => removefromcart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </h1>
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>₹{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery Fee</p>
              <p>₹{gettotalcartamount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 50}
              </b>
            </div>
            <button
              onClick={() => {
                navigate("/Placeorder");
              }}
            >
              {" "}
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
