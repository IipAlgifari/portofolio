// // core
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // component
// import Button from "presentation/component/atom/Button";

// // style
// import "./style.scss";

// import { BiSearch } from "react-icons/bi";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { MdClose } from "react-icons/md";
// // import { AiFillMinusSquare, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
// import { BsTrash, BsPersonExclamation } from "react-icons/bs";

// // -- onScroll
// // import Aos from "aos";
// // import "aos/dist/aos.css";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [position, setPosition] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);
//   const [openCart, setOpenCart] = useState(true);

//   // --handleScroll
//   useEffect(() => {
//     const handleScroll = () => {
//       let moving = window.pageYOffset;

//       setVisible(position > moving);
//       setPosition(moving);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });
//   const cls = visible ? "visible" : "hidden";

//   // handlerClickSearch
//   useEffect(() => {
//     let handleSearch = (e) => {
//       if (e.target) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousdown", handleSearch);
//   });

//   const handleSearchClose = (e) => {
//     e.preventDefault();
//     setOpen(false);
//   };

//   // handleCart


//   return (
//     <header className={cls}>
//       <div className="container">
//         <div className="header">
//           <div className="header__logo">
//             <Link className="header__logo__img" to="/">
//               <img src="asset/images/logo/logo-furniture.svg" alt="Logo" className="header__logo__img__el" />
//             </Link>
//             <h2 className="header__title">Furniro</h2>
//           </div>
//           <div className={`header__menu ${open ? "active" : "inactive"}`}>
//             <ul className="header__menu__list">
//               <li className="header__menu__item">
//                 <Link className="header__menu__link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="header__menu__item">
//                 <Link className="header__menu__link" to="/shop">
//                   Shop
//                 </Link>
//               </li>
//               <li className="header__menu__item">
//                 <Link className="header__menu__link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li className="header__menu__item">
//                 <Link className="header__menu__link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className={`header__nav ${open ? "active" : "inactive"}`}>
//             <ul className="header__nav__list">
//               <li className="header__nav__item">
//                 <Button type="link" variant="icons btn-nav" className="header__nav__link" to="/">
//                   <BsPersonExclamation/>
//                 </Button>
//               </li>
//               <li className="header__nav__item">
//                 <Button
//                   variant="icons btn-nav"
//                   type="button"
//                   onClick={() => {
//                     setOpen(!open);
//                   }}
//                 >
//                   <BiSearch />
//                 </Button>
//               </li>
//               <li className="header__nav__item">
//                 <Button type="link" variant="icons btn-nav" className="header__nav__link" to="/">
//                   <AiOutlineHeart/>
//                 </Button>
//               </li>
//               <li className="header__nav__item cart">
//                 <Button type="link" variant="icons btn-nav" onClick={() =>setOpenCart(false)}>
//                   <AiOutlineShoppingCart/>
//                   <span>1</span>
//                 </Button>
//                 {/* <Button variant="icons btn-close" onClick={handleCartClose}>
//                   <MdClose />
//                 </Button> */}
//               </li>
//             </ul>
//           </div>

//           {/* <SearchSection/> */}
//           <div className={`header__search ${open ? "active" : "inactive"}`}>
//             <div className="header__search__section">
//               <div className="header__search__form-wrapper">
//                 <form action="" className="header__search__form">
//                   <Button variant="icons btn-submit" type="submit">
//                     <BiSearch />
//                   </Button>
//                   <input className="header__search__fi" type="text" placeholder="Search" />
//                   <Button variant="icons btn-close" onClick={handleSearchClose}>
//                     <MdClose />
//                   </Button>
//                 </form>
//               </div>
//               <div className="header__search__quick-link">
//                 <div className="header__search__no-resault">
//                   <p className="header__search__no-resault__txt">Ups Maaf Halaman anda tidak ditemukan</p>
//                 </div>
//                 <div className="header__search__quick-link__wrapper">
//                   <p className="header__search__title">Tautan Cepat</p>
//                   <div className="header__search__list-container">
//                     <ul className="header__search__list">
//                       <li className="header__search__item">
//                         <Link className="header__search__link">Promo untuk anda</Link>
//                       </li>
//                       <li className="header__search__item">
//                         <Link className="header__search__link">New Collection</Link>
//                       </li>
//                       <li className="header__search__item">
//                         <Link className="header__search__link">Promo untuk anda</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* shoppingCart */}
//         <div className={`header__cart ${openCart ? "show" : "hide"}`}>
//           <div className="header__cart__box">
//             <h4 className="header__cart__title">Shopping Cart</h4>
//             <Link className="header__cart__link" to="/detail-product">
//               view all baskets
//             </Link>
//             <div className="header__cart__list">
//               <div className="header__cart__item">
//                 <div className="header__cart__product">
//                   <div className="header__cart__img">
//                     <img src="asset/images/product/product-1.jpg" alt="" />
//                   </div>
//                   <div className="header__cart__txt">
//                     <p className="header__cart__product-name">Minimalist Sofa ahahahahasahf sdasasd</p>
//                     <div className="header__cart__count-pd">
//                       <p className="header__cart__total-items">
//                         <span>1</span> X
//                       </p>
//                       <p className="header__cart__price">Rp.2000.000</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className="header__cart__count">
//                   <div className="header__cart__count-btn">
//                     <Button variant="icons count">
//                       <AiOutlinePlusCircle />
//                     </Button>
//                     <Button variant="icons count-total">1</Button>
//                     <Button variant="icons count">
//                       <AiOutlineMinusCircle />
//                     </Button>
//                   </div>
//                   <p className="header__cart__price">Rp.2000.000</p>
//                 </div> */}

//                 <Button variant="icons trash">
//                   <BsTrash />
//                 </Button>
//               </div>
//               <div className="header__cart__item">
//                 <div className="header__cart__product">
//                   <div className="header__cart__img">
//                     <img src="asset/images/product/product-1.jpg" alt="" />
//                   </div>
//                   <div className="header__cart__txt">
//                     <p className="header__cart__product-name">Minimalist Sofa ahahahahasahf sdasasd</p>
//                     <div className="header__cart__count-pd">
//                       <p className="header__cart__total-items">
//                         <span>1</span> X
//                       </p>
//                       <p className="header__cart__price">Rp.2000.000</p>
//                     </div>
//                   </div>
//                 </div>

//                 <Button variant="icons trash">
//                   <BsTrash />
//                 </Button>
//               </div>
//             </div>
//           </div>
//           {/* cart-total */}
//           <div className="header__cart__total">
//             <p className="header__cart__subtotal">Subtotal :</p>
//             <p className="header__cart__price-total">Rp.500.000</p>
//           </div>
//           {/* link-action */}
//           <div className="header__cart__action">
//             <Link type="link" className="cart-action" to="/detail-product">
//               Cart
//             </Link>
//             <Link type="link" className="cart-action" to="/chekout">
//               Checkout
//             </Link>
//             <Link type="link" className="cart-action" to="/comparison">
//               Comparison
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* backroundOverlay */}
//       <div className={`bg-overlay ${open ? "active" : "inactive"}`}></div>
//     </header>
//   );
// };

// export default Header;
