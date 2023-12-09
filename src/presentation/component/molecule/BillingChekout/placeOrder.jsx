import Button from "presentation/component/atom/Button";
import React from "react";

const PlaceOrder = () => {
  return (
    <div className="checkout__placeorder">
      <div className="checkout__placeorder__wrapper">
        <div className="checkout__placeorder__box">
          <div className="checkout__placeorder__label">
            <p className="checkout__placeorder__title">Product</p>
            <ul className="checkout__placeorder__list">
              <li>
                Asgaard sofa <span>x 1</span>
              </li>
              <li>Subtotal</li>
              <li>Total</li>
            </ul>
          </div>
          <div className="checkout__placeorder__price">
            <p className="checkout__placeorder__title">Subtotal</p>
            <ul className="checkout__placeorder__list">
              <li>Rp.250,000</li>
              <li>Rp.250,000</li>
              <li className="checkout__placeorder__total-price">Rp.250,000</li>
            </ul>
          </div>
        </div>
        <div className="checkout__placeorder__transfer">
          <div className="checkout__placeorder__txt">
            <p className="checkout__placeorder__small-title">Direct Bank Transfer</p>
            <p className="checkout__placeorder__desc">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <form action="/" className="checkout__f-payment-method">
              <div className="checkout__payment-group">
                <input type="radio" id="t_bank" value="DirectBankTransfer" name="paymentMethod" />
                <label htmlFor="t_bank">Direct Bank transfer</label>
              </div>
              <div className="checkout__payment-group">
                <input type="radio" id="cash" value="Cash On Delivery" name="paymentMethod" />
                <label htmlFor="cash">Cash On Delivery</label>
              </div>
            </form>
          </div>
          <div className="checkout__placeorder__btn">
            <p>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong>{" "}
            </p>
            <Button type="submit" variant="cart">Place order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
