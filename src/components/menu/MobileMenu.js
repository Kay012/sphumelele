import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MenuItem from './MenuItem';
import './MobileMenu.css'
const MobileMenu = () => {
    return (
        <div className="mobile__menu">
            <MenuItem title='Home' Icon={HomeIcon} link='/'/>
            <MenuItem title='Book' Icon={LibraryBooksIcon} link='/book'/>
            <MenuItem title='Biography' Icon={PersonIcon} link='/biography'/>
            <MenuItem title='Contact' Icon={ContactSupportIcon} link='/contact'/>
        </div>
    )
}

export default MobileMenu
