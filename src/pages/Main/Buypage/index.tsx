import React from 'react'
import './style.css'
import { useState, useEffect, useRef } from 'react';
import BuyBannerImage from '../../../assets/buypage2.jpg'
import Card from '../../../components/Card'
import CarImage from '../../../assets/car8.png'
import Filter from '../../../components/Filter';

const DUMMY_DATA = [
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    },
    {
        id: 1,
        carBrand: "Honda",
        carName: "City",
        price: 500000,
        kmsTravelled: 50000,
        year: 2019,
        location: "Bangalore",
        transmission: "Automatic",
        fuel: "Petrol",
        imgUrl: CarImage
    }

]

export default function Buypage() {
    const [carsData, setCarsData] = useState([])
    return (
        <div className='page'>
            <div className="buypage-banner">
                <img src={BuyBannerImage} alt="" className='buypage-banner-image' />
                <h1 className='buypage-banner-text'>Search best deals online</h1>
            </div>

            <div className="buypage-container">
                <div className="buypage-body">
                    <Filter/>
                    <div className="car-cards">
                        {DUMMY_DATA.map((item, i) => {
                            return <Card carData={item}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
