import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import '../node_modules/reset-css/reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/sass/style.sass';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
