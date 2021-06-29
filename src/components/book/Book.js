import React from 'react'
import './Book.css'
import book from '../../assets/images/book-cover.jpeg'
import publisher from '../../assets/images/publisher-image.png'
const Book = () => {
    return (
        <div className='book'>
            <div className="book__title">
                <h2>Slippy Book Margin</h2>

            </div>
            <div className="book__top">
                <div className="top__wrapper">

                    <div className="wrap-book">
                        <div className="wrapper__book-image">
                            <img src={book} alt=''/>
                        </div>
                        
                    </div>

                    <div className="mobile_wrap-book">
                        <div className="wrapper__book-image">
                            <img src={book} alt=''/>
                        </div>
                        
                    </div>
                    
                    <div className="wrapper__caption">
                        <p>
                            Sphumelele Kati delivers a very 
                            interesting book about friends
                            and lowkey enemies
                            in our lives.

                            The book is mainly influenced 
                            by real life experiences and 
                            wisdom per him.
                        </p>
                        <p>
                            2021
                        </p>
                        
                    </div>

                    
                </div>
            </div>

            <div className="book__body">
                <div className="body__title">
                    <h2>Synopsis</h2>
                </div>

                <div className="body__info">
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
                        In this story, a man is forced to flee with his family to ensure
                        their safety when he stumbles on something that does not
                        concern him. The threat follows him to his new hideout, which
                        then leads to the reveal of vile secrets kept from him over the
                        years. He loses himself in the process and ends up committing
                        despicable acts in the name of justice.
                    </p>
                    <p>
                        Whether a friend in need is a friend in deed, is yet to be seen.
                        Ways in which one can choose a friend are yet to be discovered.
                        As for now, the one you consider your closest friend, may be
                        your closest enemy, just waiting for the perfect time to strike.
                    </p>
                </div>
            </div>
            
            <div className="publisher">
                <div className="publisher__text">
                    <div className="publisher__name">
                    <a href="https://www.newvoices.co.za/"><h2>New Voices publishing services</h2></a>
                    </div>

                    <div className="publisher__image-mobile">
                        <img src={publisher} alt='' />
                    </div>
                    <div className="publisher__info">
                        <p>
                            New Voices Publishing Services has helped 
                            many first-time authors since 2005 take 
                            pleasure in publishing their book. 
                            Let Barbara Mueller lead you through the 
                            process – stress free!  If you have a book 
                            you want to publish, just go to <a href="https://www.newvoices.co.za/">newvoices.co.za</a>
                        </p>
                    </div>

                </div>

                <div className="publisher__image">
                    <img src={publisher} alt='' />
                </div>
                

            </div>
        </div>
    )
}

export default Book
