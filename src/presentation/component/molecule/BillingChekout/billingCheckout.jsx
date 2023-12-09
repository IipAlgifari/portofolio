import Input from "presentation/component/atom/Input";
import React from "react";

//style
import "./style.scss";

const billingCheckout = () => {
  return (
    <div className="checkout__form-box">
      <form action="/" className="checkout__form">
        <div className="checkout__form-group name">
          <div className="chekout__fi-first-name">
            <label htmlFor="firstname">First Name</label>
            <Input name="firstname" id="firstname" variant="checkout i-name" />
          </div>
          <div className="chekout__fi-last-name">
            <label htmlFor="lastname">Last Name</label>
            <Input name="lastname" id="lastname" variant="checkout i-name" />
          </div>
        </div>
        <div className="checkout__form-group">
          <label htmlFor="address">Street Address</label>
          <Input id="address" variant="checkout" />
        </div>
        <div className="checkout__form-group">
          <label htmlFor="zipcode">ZIP code</label>
          <Input id="zipcode" variant="checkout" />
        </div>
        <div className="checkout__form-group">
          <label htmlFor="phone">Phone</label>
          <Input id="phone" variant="checkout" />
        </div>
        <div className="checkout__form-group">
          <label htmlFor="_email">Email address</label>
          <Input id="_email" variant="checkout" />
        </div>
        <div className="checkout__form-group">
          <Input id="address" variant="checkout" placeholder="Addintional Information" />
        </div>
      </form>
    </div>
  );
};

export default billingCheckout;
