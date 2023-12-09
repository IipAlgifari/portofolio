// core
import React, { useState } from "react";
import { Link } from "react-router-dom";

// vendor
import { FaRegHeart } from "react-icons/fa";
import { BsArrowLeftRight, BsShareFill, BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
// utils
import formatRupiah from "core/util/FormatRupiah/formatRupiah";

// component
import Button from "../../atom/Button/";

// style
import "./style.scss";

const ProductCard = ({ item, handleClickItem, handleClickProduct }) => {
  const { name, description, image, price, isDiscount, discount, isNew, startingprice } = item;
  const [isOpen, setIsOpen] = useState(false);

  const handleClosePopup = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className="product__item" >
      <div className="product__card" onClick={(item) => {return handleClickProduct(item)}} >
        {/* <a type="button" href="/detail-product" className="wrapper-link">
          <span></span>
        </a> */}
        <div className="product__img">
          <div className="product__img__box">
            <img src={image} alt={name} className="product__img__el" />
          </div>
        </div>
        {isDiscount && <span className="product__label discount">{discount + "%"}</span>}
        <div className={isNew ? "product__label new" : "product__label__old"}>{isNew ? "New" : ""}</div>
        <div className="product__text">
          <h5 className="product__name">{name}</h5>
          <p className="product__desc">{description}</p>
        </div>
        <div className="product__price">
          <p className="product__price__fix">{formatRupiah(price)}</p>
          {startingprice > 0 ? <s className="product__price__str-price">{formatRupiah(startingprice)}</s> : <></>}
        </div>
        <div className="product__dots">
          <Button
            variant="icons"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BsThreeDots />
          </Button>
        </div>

        {/* -- popup */}
        <div className={`product__popup ${isOpen ? "active" : "inactive"}`}>
          <Button variant="icons btn-close" onClick={handleClosePopup}>
            <MdClose />
          </Button>
          <div className="product__popup__box">
            <div className="product__popup__btn">
              <Button
                variant="add-to-cart"
                onClick={() => {
                  setIsOpen(false);
                  return handleClickItem(item);
                }}
              >
                Add to cart
              </Button>
            </div>
            <div className="product__popup__subaction">
              <button className="btn-subaction">
                <BsShareFill />
                <span>Share</span>
              </button>
              <Link className="btn-subaction" to="/">
                <BsArrowLeftRight />
                <span>Compare</span>
              </Link>
              <button className="btn-subaction">
                <FaRegHeart />
                <span>Like</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
