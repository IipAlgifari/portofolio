const BuyNow = (props) => {
    const { children } = props;
    return (
      <a {...props} className="buy-now">
        {children}
      </a>
    );
  };
  
  export default BuyNow;
  