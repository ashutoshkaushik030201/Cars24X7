import React from 'react'
import './style.css'
import RoadIcon from '../../assets/road.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

export default function Card(props: any) {
    return (
        <div className="buypage-card">
            <div><img src={props.carData.imgUrl} alt="" className="car-img" /></div>
            <div className="car-card-details">
                <div className="car-name">{props.carData.carBrand}&nbsp;{props.carData.carName}</div>
                <div className="card-other">
                    <div className="other-details">
                        <img src={RoadIcon} alt="" className='card-other-icons' />
                        <div className="other-details-items">
                            {props.carData.kmsTravelled} km
                        </div>
                    </div>
                    <div className="other-details">
                        <LocationOnIcon className='card-other-icons' />
                        <div className="other-details-items">
                            {props.carData.location}
                        </div>
                    </div>
                    <div className="other-details">
                        <CalendarMonthIcon className='card-other-icons' />
                        <div className="other-details-items">
                            {props.carData.year}
                        </div>
                    </div>
                    <div className="other-details">
                        <LocalGasStationIcon className='card-other-icons' />
                        <div className="other-details-items">
                            {props.carData.fuel}
                        </div>
                    </div>
                    <div className="other-details">
                        <img src={RoadIcon} alt="" className='card-other-icons' />
                        <div className="other-details-items">
                            {props.carData.transmission}
                        </div>
                    </div>
                </div>
                <div className="car-price">&#8377;&nbsp;{props.carData.price}</div>
            </div>
        </div>
    )
}
