import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '../redux/reducers';

import Nav from '../components/nav';
import Footer from '../components/footer';
import '../styles/index.css'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Nav />
      <div  className="flex justify-center">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer/>
    </React.Fragment>
    </Provider>

  )
}

export default MyApp
