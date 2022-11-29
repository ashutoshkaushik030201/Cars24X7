import React from 'react'
import './style.css'
import ContactBannerImage from '../../../assets/contactus2.webp'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function ContactUs() {
    return (
        <div className='page'>
            <div className="contactus-banner">
                <img src={ContactBannerImage} alt="" className='contactus-banner-image' />
                <h1 className='contactus-banner-text'>Contact Us</h1>
            </div>

            <div className="contactus-container">
                <div className="contactus-container-items contactus-container-left">
                    <div className="contact-icon"><HeadsetMicIcon style={{ color: "white", fontSize: 105, }} /></div>
                    <div className="contact-icon-text">
                        <div className="contact-icon-text-items">Let's Talk</div>
                        <div className="contact-icon-text-items">Send Us Customized Message</div>
                    </div>
                </div>
                <div className="contactus-container-items contactus-container-right">

                </div>
            </div>
        </div>
    )
}
