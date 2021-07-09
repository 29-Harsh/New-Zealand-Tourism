import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import './App.css'
import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';
import Main from './Main';

ReactDOM.render(
<BrowserRouter>
  <Main />
  </BrowserRouter>,
 document.getElementById('root')
);
