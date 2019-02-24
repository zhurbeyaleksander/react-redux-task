import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './conteiners/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore' 
import {Provider} from 'react-redux';



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
