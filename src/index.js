import 'core-js/stable';
import 'core-js/stable/object/entries';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  rootReducer  from './reducers';

const store = createStore(rootReducer
  );
  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
