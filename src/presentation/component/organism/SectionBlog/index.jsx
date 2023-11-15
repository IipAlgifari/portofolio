import BlogPost from "presentation/component/molecule/BlogPost";
import React from "react";
import "./style.scss";
import RecentPostCard from "presentation/component/molecule/RecentPost";

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
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
          </div>
          <div className="blog__side">
            <div className="blog__side-container">
              <RecentPostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
