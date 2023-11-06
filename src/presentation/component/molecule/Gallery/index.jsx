// style
import "./style.scss";

const Galerry = () => {
  const dataGallery = [
    {
      id: 1,
      img: "asset/images/dummy/gallery/gallery-1.jpg",
      alt: "gallery-1",
    },
    {
      id: 2,
      img: "asset/images/dummy/gallery/gallery-2.jpg",
      alt: "gallery-2",
    },
    {
      id: 3,
      img: "asset/images/dummy/gallery/gallery-3.jpg",
      alt: "gallery-3",
    },
    {
      id: 4,
      img: "asset/images/dummy/gallery/gallery-4.jpg",
      alt: "gallery-4",
    },
    {
      id: 5,
      img: "asset/images/dummy/gallery/gallery-5.jpg",
      alt: "gallery-5",
    },
    {
      id: 6,
      img: "asset/images/dummy/gallery/gallery-6.jpg",
      alt: "gallery-6",
    },
    {
      id: 7,
      img: "asset/images/dummy/gallery/gallery-7.jpg",
      alt: "gallery-7",
    },
    {
      id: 8,
      img: "asset/images/dummy/gallery/gallery-8.jpg",
      alt: "gallery-8",
    },
    {
      id: 9,
      img: "asset/images/dummy/gallery/gallery-9.jpg",
      alt: "gallery-9",
    },
  ];

  return (
    <div className="gallery__list">
      {dataGallery.map((data, idx) => (
        <div key={idx} className="gallery__item" id={data.id}>
          <div className="gallery__box">
            <img src={data.img} alt={data.alt} className="gallery__img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galerry;
