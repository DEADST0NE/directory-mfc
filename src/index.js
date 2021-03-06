import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import './index.css';
import App from './container/App'; 
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}> 
      <App /> 
  </Provider>,
  document.getElementById('root')
);
