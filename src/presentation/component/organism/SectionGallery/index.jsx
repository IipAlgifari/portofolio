// component
import Gallery from "presentation/component/molecule/Gallery";

// style
import "./style.scss";

const SectionGallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__txt">
          <p className="gallery__desc">Share your setup with</p>
          <h3 className="gallery__title">#FurniroFurniture</h3>
        </div>
        <Gallery />
      </div>
    </section>
  );
};

export default SectionGallery;
