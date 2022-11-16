import React from 'react'
import './style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='company'>
                CARS24X7
            </div>
            <div className='social-links'>
                <a href="https://www.instagram.com/?hl=en"><InstagramIcon /></a>
                <a href="https://www.facebook.com/"><FacebookIcon /></a>
                <a href="https://twitter.com/i/flow/login"><TwitterIcon /></a>
            </div>
            <div className='copyright'>
                {/* <Copyright/> */}
                Copyright@Cars24X7 2022
            </div>
        </footer>
    )
}
