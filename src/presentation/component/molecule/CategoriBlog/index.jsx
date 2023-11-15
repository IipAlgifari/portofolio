import React from 'react'
//componet
import Button from 'presentation/component/atom/Button'
import Input from 'presentation/component/atom/Input'
import { BiSearch } from "react-icons/bi";
//style
import "./style.scss";

const CategoriBlog = () => {
  return (
    <div className='blog__categories'>
      <div className="blog__categories__form">
        <label htmlFor="search">
            <Input variant="blog-search"/>
        </label>
        <Button variant="icons blog-btn" type="button"><BiSearch/></Button>
      </div>
      <div className="blog__categories__box">
        <p className="blog__categories__title">Categories</p>
        <div className="blog__categories__list">
            <div className="blog__categories__item">
                <p className="blog__categories__subtitle">Craftts</p>
                <span>10</span>
            </div>
            <div className="blog__categories__item">
                <p className="blog__categories__subtitle">Design</p>
                <span>6</span>
            </div>
            <div className="blog__categories__item">
                <p className="blog__categories__subtitle">Handlemade</p>
                <span>8</span>
            </div>
            <div className="blog__categories__item">
                <p className="blog__categories__subtitle">Interior</p>
                <span>12</span>
            </div>
            <div className="blog__categories__item">
                <p className="blog__categories__subtitle">Wood</p>
                <span>9</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriBlog
