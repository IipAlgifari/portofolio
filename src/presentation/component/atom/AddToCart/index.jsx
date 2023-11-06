const AddToCart = (props) => {
    const { children } = props;
    return (
      <a {...props} className="btn btn--secondary addtocart">
        {children}
      </a>
    );
  };
  
  export default AddToCart;