import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import store from './store';

const Home = lazy(() => import('./components/Home'));

const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Suspense>
    </Router>
    <Footer />
  </Provider>)

export default App;
