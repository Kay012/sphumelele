import React from 'react'
import { Link } from 'react-router-dom'

import './SocialMediaIcon.css'


const SocialMediaIcon = ({Icon, color, size}) => {
    return (
        <span className='icon'>
            <Link to='/'><Icon style={{color:color, fontSize: size}}/></Link>
        </span>
    )
}

export default SocialMediaIcon
