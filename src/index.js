import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/popper.js/dist/popper.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import { compose, applyMiddleware } from 'redux';

const initialStore = {
  quantity: {
    qt: 1
  },
  rating: {
    rating: 1
  },
  total: {
    total: 25
  },
  wishlist: {
    selected: false
  },
  packages: [
    {
      price: '25.00',
      packageName: 'A',
      skills: 'aa',
      selected: true,
      quantity: 1
    },
    {
      price: '75.00',
      packageName: 'B',
      skills: 'bb',
      selected: false,
      quantity: 1
    },
    {
      price: '40.00',
      packageName: 'C',
      skills: 'cc',
      selected: false,
      quantity: 1
    }
  ],
  related: [
    {
      id: 'id1',
      photo: '/images/Related.svg',
      title: 'I will design and build a professional website',
      user: 'KALPESH PATIL',
      price: 94.43,
      rating: 4
    },
    {
      id: 'id2',
      photo: '/images/Related.svg',
      title: 'I will develop a blog or website on wordpress platform',
      user: 'IVAN SETIANA',
      price: 28.33,
      rating: 5
    },
    {
      id: 'id3',
      photo: '/images/Related.svg',
      title: 'I will do any wordpress, joomla work',
      user: 'MALIMEE ONPIM',
      price: 4.72,
      rating: 2
    }
  ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware()
);

const store = createStore(allReducers, initialStore, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
