import "./style.scss";

const RecentPostCard = () => {
  return (
    <div className='blog__recent-post__item'>
      <div className="blog__recent-post__img">
        <img src="asset/images/dummy/gallery/gallery-2.jpg" alt="blog-title" className='blog__recent-post__img__el'/>
      </div>
      <h4 className="blog__recent-post__title">Going all-in with millennial design</h4>
      <p className="blog__recent-post__time">03 Aug 2023</p>
    </div>
  )
}

export default RecentPostCard;
