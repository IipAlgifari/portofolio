import Button from "presentation/component/atom/Button";
import "./style.scss";

const CartTotals = () => {
  return (
    <div className="cart__totals">
      <div className="cart__totals__box">
        <h3 className="cart__totals__title">Cart Totals</h3>
        <div className="cart__totals__subtotal">
          <p className="cart__totals__subtotal-label">Subtotals</p>
          <p className="cart__totals__subtotal-price">Rp250.000</p>
        </div>
        <div className="cart__totals__total">
          <p className="cart__totals__total-label">Total</p>
          <p className="cart__totals__total-price">Rp250.000</p>
        </div>
        <div className="cart__totals__checkout">
          <Button to="/Checkout" type="link" variant="cart">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
