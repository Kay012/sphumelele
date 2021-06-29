import React from 'react'
import author from '../../assets/images/author.jpg'
import book from '../../assets/images/book-cover.jpeg'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className="mobile__image-wrapper">
                <div className="top__author-mobile_image">
                    <img  src={author} alt=''/>
                </div>
            </div>
            
            <section className="home__top">
                
                <div className="top__author-name">
                    <p>Hello and welcome to my online home.</p>
                    <p>I'm Sphumelele Kati</p>
                    <p>
                        I hope you’re all keeping safe and sound 
                        during these troubling times. In the meantime, 
                        please feel free to explore and enjoy my website.
                    </p>

                    <p>Stay safe.</p>

                </div>
                <div className="top__author-image">
                    <img  src={author} alt=''/>
                </div>

            </section>
            <div className="home__body-wrapper">
            <div className="home__body">
                <div className="body__image-wrapper">
                    <div className="body__book-image" >
                        <img src={book} alt=''/>
                    </div>
                </div>
                
                <div className="body__book-caption">
                    <h2>Title: Slippy Book Margin, 2021</h2>
                    <p>
                        Making friends may be as easy as a blink of an eye. In most cases,
                        not much thought is given to it, as it just happens randomly.
                        Many have been called friends, but the question is, ‘what is it
                        that qualifies them to be friends?’ As dynamic as a human mind
                        is, can they really live up to the definition of the term ‘friend’?
                        How long does it take for someone to become a friend? Can
                        years of friendship guarantee a betrayal-free relationship?
                    </p>
                    <p>
                        Whether a friend in need is a friend in deed, is yet to be seen.
                        Ways in which one can choose a friend are yet to be discovered.
                        As for now, the one you consider your closest friend, may be
                        your closest enemy, just waiting for the perfect time to strike.
                    </p>

                    <Link to='/book'><span>Read more</span></Link>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Home
