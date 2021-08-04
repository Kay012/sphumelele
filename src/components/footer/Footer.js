import React from 'react'

import './Footer.css'
import Menu from '../menu/Menu'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import SocialMediaIcon from './SocialMediaIcon';
const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__connect_links'>
                <SocialMediaIcon Icon={TwitterIcon} color='#00aced' size="21px"/>
                <SocialMediaIcon Icon={InstagramIcon} color='#bc2a8d' size="21px"/>
                <SocialMediaIcon Icon={FacebookIcon} color='#3b5998' size="21px"/>
                <SocialMediaIcon Icon={LinkedInIcon} color='#007bb6' size="21px"/>
                <SocialMediaIcon Icon={MailIcon} color='#D44638' size="21px"/>
            </div>
            <div className="footer__menu">
                <Menu />
            </div>
            <div className="footer__last_line">
                <span>All Content @ Siphumelele kati</span> 
                <span className='divider'>|</span>
                <span> Site by Anonymous Tech Solutions</span>
            </div>
            
            
        </div>
    )
}

export default Footer
