import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import MobileMenu from '../menu/MobileMenu';

import './BurgerNav.css'
const BurgerNav = () => {

    return (
        <div className='burger-nav'>
            <div className="close__icon">
                <CloseIcon />
            </div>
            <MobileMenu />
            
        </div>
    )
}

export default BurgerNav
