import React from "react";
// global state
import useCart from "core/state/useCart";
import { Link } from "react-router-dom";
// icons
import { FaAngleRight, FaStarHalf, FaPlus, FaSquareFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { BsFillStarFill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
// component
import InfoProductDetail from "presentation/component/molecule/InfoProductDetail";
import Button from "presentation/component/atom/Button";
import Input from "presentation/component/atom/Input";

import "./style.scss";
import formatRupiah from "core/util/FormatRupiah/formatRupiah";

const SectionProductDetails = () => {
  const {items: productItem} = useCart();

  return (
    <div className="product-detail">
      {/* -- head -- */}
      <div className="product-detail__head">
        <div className="container head">
          <div className="product-detail__nav">
            <ul className="product-detail__nav__list">
              <li className="product-detail__nav__item">
                <Link className="product-detail__nav__link">Home</Link>
              </li>
              <li className="product-detail__nav__item">
                <FaAngleRight />
              </li>
              <li className="product-detail__nav__item">
                <Link className="product-detail__nav__link">shop</Link>
              </li>
              <li className="product-detail__nav__item">
                <FaAngleRight />
              </li>
              <li className="product-detail__nav__item">Asgaard sofa</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="product-detail__body">
          <div className="product-detail__wrapper-img">
            <div className="product-detail__img">
              <div className="product-detail__img__variant">
                <div className="product-detail__img__list">
                  <div className="product-detail__img__item">
                    <img src="asset/images/dummy/detail-product/maya-sofa-three-seater.png" alt="item-img-variant" />
                  </div>
                  <div className="product-detail__img__item">
                    <img src="asset/images/dummy/detail-product/outdoor-sofa-set_21.png" alt="item-img-variant" />
                  </div>
                  <div className="product-detail__img__item">
                    <img src="asset/images/dummy/detail-product/outdoor-sofaset-2.png" alt="item-img-variant" />
                  </div>
                  <div className="product-detail__img__item">
                    <img src="asset/images/dummy/detail-product/stuart-sofa-1.png" alt="item-img-variant" />
                  </div>
                </div>
              </div>
              <div className="product-detail__img__view">
                <div className="product-detail__img__active">
                  <img src="asset/images/dummy/detail-product/asgaard-sofa3.png" alt="sofa" />
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail__content">
            <div className="product-detail__txt">
              <h5 className="product-detail__name">{productItem.title}</h5>
              <p className="product-detail__price">{productItem.price}</p>
              <div className="product-detail__content__box">
                <ul className="product-detail__star">
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <FaStarHalf />
                  </li>
                </ul>
                <p className="product-detail__customer-review">
                  <span>5</span> Customer Review
                </p>
              </div>
              <div className="product-detail__description">
                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
              </div>
            </div>

            <div className="product-detail__variant">
              <div className="product-detail__size">
                <p className="product-detail__label">Size</p>
                <div className="product-detail__btn-size">
                  <Button type="button" variant="size p-detail">
                    L
                  </Button>
                  <Button type="button" variant="size p-detail">
                    XL
                  </Button>
                  <Button type="button" variant="size p-detail">
                    XXL
                  </Button>
                </div>
              </div>
              <div className="product-detail__color">
                <p className="product-detail__label">Color</p>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="product-detail__btn">
                <div className="product-detail__btn-qty">
                  <Button type="button" variant="size min">
                    <FaMinus />
                  </Button>
                  <Input variant="count i-count" type="number" value="1" />
                  <Button type="button" variant="size plus">
                    <FaPlus />
                  </Button>
                </div>
                <Button variant="cart">Add To Cart</Button>
                <Button variant="cart">+ Compare</Button>
              </div>
              <div className="product-detail__table">
                <table>
                  <tr>
                    <td>SKU</td>
                    <td>: SS001</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>: Sofa</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td>: Sofa,Chair,Home,Shop</td>
                  </tr>
                  <tr>
                    <td>share</td>
                    <td>
                      :{" "}
                      <span>
                        <FaSquareFacebook />
                      </span>
                      <span>
                        <FaSquareXTwitter />
                      </span>
                      <span>
                        <FaLinkedin />
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <InfoProductDetail/>
      </div>
    </div>
  );
};

export default SectionProductDetails;
