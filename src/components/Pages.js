import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Book from './book/Book'
import Biography from './biography/Biography'
import Contact from './contact/Contact'
import NotFound from './NotFound'

const Pages = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/book' exact component={Book} />
            <Route path='/biography' exact component={Biography} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/*' exact component={NotFound}/>
        </Switch>
            
        
    )
}

export default Pages
