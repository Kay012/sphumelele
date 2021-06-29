import React from 'react'
import './Header.css'
import Fade from 'react-reveal'
import {useSelector, useDispatch} from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';

import CloseIcon from '@material-ui/icons/Close';
import MobileMenu from '../menu/MobileMenu';

import * as burgerNavActions from '../../store/actions'


const Header = () => {

    

    const burgerStatus = useSelector(state => state.burgerNav.burgerStatus)

    // const consoler = async () => {
    //     await console.log(burgerStatus)
    // }

    // useEffect(() => {
    //     consoler()

    // }, [burgerStatus, consoler])

    const dispatch = useDispatch()

    const burgerStatusHandler = async(e) => {
        e.preventDefault()
        await dispatch(burgerNavActions.burgerStatusHandler(burgerStatus))
        
    }
    return (
        <div className='header'>
            <div className='eish'>
                <div className="header__logo">
                    <Link to='/'><h2>Sphumelele Kati</h2></Link>
                </div>

                
                <Menu />

                <div className="right__menu">
                    <MenuIcon  onClick={burgerStatusHandler} className="menu_icon"/>
                </div>

                
                {
                    burgerStatus && 
                    <Fade right >
                    <div className='burgernav'>
                        <div className="close__icon">
                            <CloseIcon onClick={burgerStatusHandler}/>
                        </div>
                        <div onClick={burgerStatusHandler}>
                            <MobileMenu />
                        </div>
                    </div> 
                    </Fade>
                }
                
            </div>
        </div>
    )
}

export default Header
