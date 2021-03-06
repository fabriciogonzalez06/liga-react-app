import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//componentes
import Header from './components/common/header/header';
import Router from './Router';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <React.StrictMode>
    <div>
    <Header/>
    <div className="contenedor" >
        <Router/>
    </div>
    
    </div>
  </React.StrictMode>
  
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
