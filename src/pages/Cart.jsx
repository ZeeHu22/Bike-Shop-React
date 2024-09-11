import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/undraw_empty_cart.svg";

const Cart = ({ cart, updateCart, removeItem, totals }) => {
  return (
    <div id="bikes__body">
      <main id="bikes__main">
        <div className="bikes__container">
          <div className="row">
            <div className="bike__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__bike">Bike</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => {
                  const itemPrice = item.salePrice || item.originalPrice;
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__bike">
                        <img
                          className="cart__bike--img"
                          src={item.url}
                          alt=""
                        />
                        <div className="cart__bike--info">
                          <span className="cart__bike--title">
                            {item.title}
                          </span>
                          <span className="cart__bike--price">
                            ${itemPrice.toFixed(2)}
                          </span>
                          <button
                            className="cart__bike--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            updateCart(item, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any bikes in your cart!</h2>
                    <Link to="/bikes">
                      <button className="btn">Browse bikes</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <button className="btn btn__checkout no-cursor" onClick={() => alert(`Haven't done this :(`)}>
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
