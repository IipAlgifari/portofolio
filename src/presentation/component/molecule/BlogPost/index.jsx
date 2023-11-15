import Button from "presentation/component/atom/Button";
import "./style.scss";

const BlogPost = () => {
  return (
    <div className="blog__item">
      <div className="blog__box">
        <div className="blog__img">
          <img src="asset/images/dummy/blog/img-blog-1.jpg" alt="blog-post" className="blog__img__el" />
        </div>
        <div className="blog__time">04 Feb 2023</div>
        <div className="blog__txt">
          <h3 className="blog__title">Going all-in with millennial design</h3>
          <p className="blog__article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.
            Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
          <div className="blog__read-more">
            <Button type="button" variant="read-more">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
