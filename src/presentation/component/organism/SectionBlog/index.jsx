import React from "react";
//component
import BlogPost from "presentation/component/molecule/BlogPost";
import RecentPostCard from "presentation/component/molecule/RecentPost";
import CategoriBlog from "presentation/component/molecule/CategoriBlog";
// style
import "./style.scss";


const SectionBlog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <div className="blog__post">
            <div className="blog__list">
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
          </div>
          <div className="blog__side">
            <div className="blog__side-container">
              <CategoriBlog/>
              <RecentPostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
