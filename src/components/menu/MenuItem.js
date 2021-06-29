import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'


const HeaderItem = ({title, Icon, link}) => {

    
   
    return (
        <div className='menu_item'>
            <Link to={link}>
                <Icon />
                <span>{title}</span>
            </Link>
        </div>
    )
}

export default HeaderItem
