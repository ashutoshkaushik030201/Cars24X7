import React from 'react'
import './style.css'
import BannerImage from '../../../assets/banner3.webp'
import ArrowImg from '../../../assets/arrow-right.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { popularBrandsArr } from './data'
import { useState, useEffect, useRef } from 'react';

export default function Dashboard() {
  const [isAllBrandsShown, setIsAllBrandsShown] = useState(12);

  const handleShowAllBrands = () => {
    if(isAllBrandsShown === 12){
      setIsAllBrandsShown(20)
    }else{
      setIsAllBrandsShown(12)
    }
  }

  return (
    <div className='page'>
      <div className="banner">
        <img src={BannerImage} alt="" className='banner-image' />
        <h1 className='banner-text'>Welcome to CARS24X7</h1>
      </div>

      <div className='buyer-seller-grid'>
        <div className='buyer-seller-grid-items buyer-card'>
          <div className='image-text-div'>
            <div className="buyer-seller-card-text">Buy Your Dream Car</div>
            <div><img src={ArrowImg} alt="buyer" className="buyer-seller-card-icon" /></div>
          </div>

        </div>
        <div className='buyer-seller-grid-items seller-card'>
          <div className='image-text-div'>
            <div className="buyer-seller-card-text">Sell Your Car</div>
            <div ><img src={ArrowImg} alt="seller" className="buyer-seller-card-icon" /></div>
          </div>
        </div>
      </div>

      <hr />

      <div className="popular-brands">
        <div className="popular-brands-heading">Popular Brands</div>

        <div className='grid-container'>
          {popularBrandsArr.slice(0, isAllBrandsShown).map((item, i): any => {
            return (<div className="grid-items">
              <div className="grid-item-content">
                <div><img src={item.url} alt="" className='popular-brands-images' /></div>
                <div className="popular-brand-name">{item.brandName}</div>
                <div className="popular-brand-total">{item.count} CARS</div>
              </div>
            </div>)
          })}
        </div>

        <div className="view-all-brands" onClick={handleShowAllBrands}>
          <div>{isAllBrandsShown === 12? "Show":"Hide"} all brands &nbsp;</div> 
          <div>{isAllBrandsShown === 12? <KeyboardArrowDownIcon/>: <KeyboardArrowUpIcon/>}</div>
        </div>
      </div>
    </div>
  )
}
