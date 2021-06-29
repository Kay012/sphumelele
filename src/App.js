import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Pages from './components/Pages';
import Footer from './components/footer/Footer';
import {burgerNavReducer} from './store/reducer'

import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  burgerNav: burgerNavReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

function App() {

  return (
    <Provider store={store}>
      <Router>
      <div className="app">
        <Header />
        
        <div className="mainpages">
              <Pages className='pages'/>
        </div>
        
        <Footer />
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
