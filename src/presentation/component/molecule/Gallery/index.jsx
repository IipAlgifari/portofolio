// style
import "./style.scss";

const Galerry = () => {
  return (
    <div className="gallery__list">
      <div className="gallery__item">
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-1.jpg" alt="gallery" className="gallery__img" />
        </div>
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-2.jpg" alt="gallery" className="gallery__img" />
        </div>
      </div>
      <div className="gallery__item">
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-9.jpg" alt="gallery" className="gallery__img" />
        </div>
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-4.jpg" alt="gallery" className="gallery__img" />
        </div>
      </div>
      <div className="gallery__item">
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-5.jpg" alt="gallery" className="gallery__img" />
        </div>
        <div className="gallery__box">
          <img src="asset/images/dummy/gallery/gallery-3.jpg" alt="gallery" className="gallery__img" />
        </div>
      </div>
    </div>
  );
};

export default Galerry;
