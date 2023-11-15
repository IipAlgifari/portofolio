import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf, BsPersonCircle } from "react-icons/bs";
import Button from "presentation/component/atom/Button";
import "./style.scss";
import Input from "presentation/component/atom/Input";

const InfoProduct = () => {
  const [product, setProduct] = useState({});
  const [reviewFormData, setReviewFormData] = useState({
    user: "",
    comment: "",
  });
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const dummyProductData = {
      id: 1,
      name: "Nama Produk",
      description: ` Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
      price: 100.0,
      variants: [
        { id: 1, name: "Ukuran L", stock: 10 },
        { id: 2, name: "Ukuran XL", stock: 15 },
        { id: 3, name: "Ukuran XXL", stock: 20 },
      ],
      reviews: [
        { id: 1, user: "Pengguna 1", comment: "Ulasan produk yang bagus!", rating: 3 },
        { id: 2, user: "Pengguna 2", comment: "Sangat memuaskan.", rating: 3 },
      ],
      specifications: {
        brand: "Merek Produk",
        weight: "1 kg",
        material: "Bahan Produk",
      },
      images: [
        {
          img: "asset/images/dummy/detail-product/product-detail-1.png",
          txt: "product images",
        },
        {
          img: "asset/images/dummy/detail-product/product-detail-2.png",
          txt: "product images",
        },
      ],
    };

    setProduct(dummyProductData);
  }, []);

  const handleInputChange = (e) => {
    setReviewFormData({
      ...reviewFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      user: reviewFormData.user,
      comment: reviewFormData.comment,
      rating: rating,
    };

    const updatedReviews = [...reviews, newReview];

    //menyimpan ke localStorage
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setReviews(updatedReviews);
    setReviewFormData({
      user: "",
      comment: "",
    });
    setRating(0);
  };

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const roundedRating = Math.round(rating);

      if (i <= roundedRating) {
        stars.push(
          <span className="stars-yellow" key={i}>
            <BsStarFill onClick={() => handleStarClick(i)} />
          </span>
        );
      } else if (i - 0.5 === roundedRating) {
        stars.push(
          <span key={i}>
            <BsStarHalf onClick={() => handleStarClick(i - 0.5)} />
          </span>
        );
      } else {
        stars.push(
          <span key={i}>
            <BsStar onClick={() => handleStarClick(i)} />
          </span>
        );
      }
    }
    return <div className="rating-stars">{stars}</div>;
  };

  const [expandedReviews, setExpandedReviews] = useState([]);

  const toggleReadMoreReview = (reviewId) => {
    if (expandedReviews.includes(reviewId)) {
      setExpandedReviews(expandedReviews.filter((id) => id !== reviewId));
    } else {
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  return (
    <div className="info-product">
      <div className="info-product__nav">
        <ul className="info-product__nav__list">
          <li className="info-product__nav__item">Description</li>
          <li className="info-product__nav__item">Addintional Information</li>
          <li className="info-product__nav__item">
            Reviews [<span>{reviews.length}</span>]
          </li>
        </ul>
      </div>

      <div className="info-product__tabs">
        <div className="info-product__tabs__description">
          <div className="info-product__txt">
            <p className="info-product__desc">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="info-product__description">{product.description}</p>
          </div>
          <div className="info-product__img">
            {product.images &&
              product.images.map((img, index) => (
                <div key={index} className="info-product__img__item">
                  <img src={img.img} alt={`${product.name} - ${img.txt}`} className="info-product__img__el" />
                </div>
              ))}
          </div>
        </div>

        <div className="info-product__tabs__addintional">
          <div className="info-product__detail">
            <p>{product.name}</p>
            <h4>Varian Produk:</h4>
            <ul>
              {product.variants &&
                product.variants.map((variant) => (
                  <li key={variant.id}>
                    {variant.name} - Stok: {variant.stock}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="info-product__tabs__reviews">
          <div className="info-product__form-reviews">
            <div className="info-product__form-box">
              <form onSubmit={handleSubmitReview} className="info-product__form">
                <h4 className="info-product__title">Customer Reviews</h4>
                <div className="form-group">
                  <label htmlFor="user">Your Name :</label>
                  <Input variant="secondary" type="text" id="user" name="user" value={reviewFormData.user} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Your Comment :</label>
                  <textarea className="scroll" id="comment" name="comment" value={reviewFormData.comment} onChange={handleInputChange} required></textarea>
                </div>
                <div className="form-group">{renderStars()}</div>
              </form>
              <Button variant="secondary" type="button" onClick={handleSubmitReview}>
                Submit Review
              </Button>
            </div>

            {/* Tampilkan ulasan pelanggan */}
            <div className="info-product__reviews">
              <h4 className="info-product__title">Buyer Reviews</h4>
              <div>
                {reviews.map((review) => (
                  <div key={review.id}>
                    <div className="info-product__profile">
                      <div className="info-product__profile__img">
                        <BsPersonCircle />
                      </div>
                      <p className="info-product__profile__name">IIp Muhamad</p>
                    </div>
                    <div className="info-product__box-stars">
                      <div className="info-product__star-rating">{renderStars(review.rating)}</div>
                      <p>4 bulan lalu</p>
                    </div>
                    <div className={`info-product__box-comment ${expandedReviews.includes(review.id) ? "expanded" : "collapsed"}`}>
                      <p>{expandedReviews.includes(review.id) ? review.comment : `${review.comment.slice(0, 150)}...`}</p>
                      <button onClick={() => toggleReadMoreReview(review.id)}>{expandedReviews.includes(review.id) ? "Sembunyikan" : "Lihat Selengkapnya"}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
