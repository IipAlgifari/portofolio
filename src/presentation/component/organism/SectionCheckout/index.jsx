import React from "react";
// component
import BillingCheckout from "presentation/component/molecule/BillingChekout/billingCheckout";
import PlaceOrder from "presentation/component/molecule/BillingChekout/placeOrder";
//style
import "./style.scss";

const SectionCheckout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__wrapper">
          {/* Billing details */}
          <div className="checkout__billing-details">
            <div className="checkout__title">
              <h2>Billing Details</h2>
            </div>
            <BillingCheckout />
          </div>

          {/* Place order */}
          <div className="checkout__place-order">
            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCheckout;
