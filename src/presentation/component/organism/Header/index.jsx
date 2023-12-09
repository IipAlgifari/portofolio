// core
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// utils
import FormatRupiah from "core/util/FormatRupiah/formatRupiah";

// component
import Button from "presentation/component/atom/Button";
import List from "./listSearch";

// icons
import { BiSearch } from "react-icons/bi";
import {  AiOutlineShoppingCart } from "react-icons/ai";
import { MdClose, MdOutlineNotificationsNone } from "react-icons/md";
import { BsPersonExclamation, BsTrash, BsFillInfoSquareFill  } from "react-icons/bs";
import { ImHome2 } from "react-icons/im";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSquarePhoneFlip } from "react-icons/fa6";

// style
import "./style.scss";

// global state
import useCart from "core/state/useCart";
import BurgerMenu from "presentation/component/atom/BurgerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [openChart, setOpenChart] = useState("0");
  const [query, setQuery] = useState("");
  let totalPrice = 0;

  const { items: listCart, remove: deleteCart } = useCart();

  // --handleScrollHeader
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = visible ? "visible" : "hidden";

  // --handlerClickSearch
  useEffect(() => {
    let handleOpenSearch = (e) => {
      if (e.target) {
        setOpen(false);
      }
    };
    document.addEventListener("mousdown", handleOpenSearch);
  }, []);
  const handleSearchClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  //-- handleQuerySearch
  const queryHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setQuery(lowerCase);
  };

  const chartStyles = {
    opacity: `${openChart}`,
    visibility: `${openChart === "0" ? "hidden" : "visible"}`,
  };
  //-- total-price-cart
  listCart.map((item) => {
    totalPrice = FormatRupiah(item.price * item.qty);
    return item;
  });
  // -- deleteItemCart
  const handleDeleteItem = (itemIdToDelete) => {
    deleteCart({ id: itemIdToDelete });
    // updateCart({ id: 1, qty: 10 });
  };

  return (
    <header className={cls}>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Link className="header__logo__img" to="/">
              <img src="asset/images/logo/logo-furniture.svg" alt="Logo" className="header__logo__img__el" />
            </Link>
            <h2 className="header__title">Furniro</h2>
          </div>

          {/* burger-menu */}      
          <BurgerMenu/>

          {/* header menu */}
          <div className={`header__menu ${open ? "active" : "inactive"}`}>
            <ul className="header__menu__list">
              <li className="header__menu__item">
                <Link className="header__menu__link" to="/">
                  <span><ImHome2/></span>
                  Home
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="header__menu__link" to="/shop">
                  <span><HiShoppingBag/></span>
                  Shop
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="header__menu__link" to="/about">
                  <span><BsFillInfoSquareFill /></span>
                  About
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="header__menu__link" to="/contact">
                  <span><FaSquarePhoneFlip /></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* header nav */}
          <div className={`header__nav ${open ? "active" : "inactive"}`}>
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link to="/my-account" type="link" className="btn btn--icons btn-nav">
                  <BsPersonExclamation />
                </Link>
              </li>
              <li className="header__nav__item">
                <Button
                  variant="icons btn-nav"
                  type="button"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <BiSearch />
                </Button>
              </li>
              <li className="header__nav__item">
                <Button type="button" variant="icons btn-nav" className="header__nav__link" to="/">
                <MdOutlineNotificationsNone />
                  {listCart?.length > 0 ? <span>{listCart?.length > 0 ? listCart?.length : 0}</span> : ""}
                </Button>
              </li>
              <li className="header__nav__item">
                <Link type="link" to="/detail-product" className="btn btn--icons btn-nav" onMouseEnter={() => setOpenChart("1")}>
                  <AiOutlineShoppingCart />
                  {listCart?.length > 0 ? <span>{listCart?.length > 0 ? listCart?.length : 0}</span> : ""}
                </Link>
              </li>
            </ul>
          </div>

          {/* <SearchSection/> */}
          <div className={`header__search ${open ? "active" : "inactive"}`}>
            <div className="header__search__section">
              <div className="header__search__form-wrapper">
                <form action="" className="header__search__form">
                  <Button variant="icons btn-submit" type="button" onClick={queryHandler}>
                    <BiSearch />
                  </Button>
                  <input className="header__search__fi" type="text" placeholder="Search" onChange={queryHandler} />
                  <Button variant="icons btn-close" onClick={handleSearchClose}>
                    <MdClose />
                  </Button>
                </form>
              </div>
              <div className="header__search__resault-query">
                <List input={query} />
              </div>
              <div className={`header__search__quick-link`}>
                <div className="header__search__no-resault">
                  <p className="header__search__no-resault__txt">Ups Maaf Halaman anda tidak ditemukan</p>
                </div>
                <div className="header__search__quick-link__wrapper">
                  <p className="header__search__title">Tautan Cepat</p>
                  <div className="header__search__list-container">
                    <ul className="header__search__list">
                      <li className="header__search__item">
                        <Link className="header__search__link">Promo untuk anda</Link>
                      </li>
                      <li className="header__search__item">
                        <Link className="header__search__link">New Collection</Link>
                      </li>
                      <li className="header__search__item">
                        <Link className="header__search__link">Promo untuk anda</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shoppingCart */}
        <div className="header__cart" style={chartStyles} onMouseLeave={() => setOpenChart("0")}>
          <div className="header__cart__box">
            <h4 className="header__cart__title">Shopping Cart</h4>
            <Link className="header__cart__link" to="/detail-product">
              view all baskets
            </Link>
            <div className="header__cart__list">
              <div>
                {listCart.map((val) => {
                  return (
                    <div className="header__cart__item" key={val.id}>
                      <div className="header__cart__product">
                        <div className="header__cart__img">
                          <img src={val.image} alt={val.name} />
                        </div>
                        <div className="header__cart__txt">
                          <p className="header__cart__product-name">{val.name}</p>
                          <div className="header__cart__count-pd">
                            <p className="header__cart__total-items">
                              <span>{val.qty}</span> X
                            </p>
                            <p className="header__cart__price">{FormatRupiah(val.price)}</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="icons trash" onClick={() => handleDeleteItem(val.id)}>
                        <BsTrash />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* cart-total */}
          <div className="header__cart__total">
            <p className="header__cart__subtotal">Subtotal :</p>
            <p className="header__cart__price-total">{totalPrice}</p>
          </div>
          {/* link-action */}
          <div className="header__cart__action">
            <Link type="link" className="cart-action" to="/cart">
              Cart
            </Link>
            <Link type="link" className="cart-action" to="/checkout">
              Checkout
            </Link>
            <Link type="link" className="cart-action" to="/comparison">
              Comparison
            </Link>
          </div>
        </div>
      </div>

      {/* backroundOverlay */}
      <div className={`bg-overlay ${open ? "active" : "inactive"}`}></div>
    </header>
  );
};

export default Header;
