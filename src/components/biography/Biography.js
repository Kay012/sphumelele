import React from 'react'

import './Biography.css'
import author from '../../assets/images/author.jpg'

const Biography = () => {
    return (
        <div className='biography'>
            <div className="biography__title">
                <h2>Biography</h2>
            </div>

            <div className="biography__top">
                <div className="top__wrap">

                    <div className="wrapper__image-mobile">
                        <img src={author} alt='' />
                    </div>
                    
                    <div className="wrapper__info">
                        <p>
                            Mr S.G. Kati is a Nelson Mandela University 
                            graduate, 
                            currently employed by the Eastern Cape 
                            department of education. He was born and 
                            bred at Mount Zion location in Bizana Eastern Cape. 
                        </p>
                            
                        <p>
                            He is inspired by the increasing number 
                            of learners who can neither read, nor write. 
                            He therefore believes that, instilling the 
                            culture of reading in every adult, may be 
                            the remedy to the problem faced by most schools. 
                            He believes that children copy most their 
                            habit from parents and that if parents can 
                            begin to embrace the culture of reading, 
                            their children and even the generations to 
                            come will follow suit.
                        </p>
                    </div>

                    <div className="wrapper__image">
                        <img src={author} alt='' />
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Biography
