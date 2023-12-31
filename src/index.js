import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/Store/index';
import { ThemeProvider } from './components/Context/ThemeContext';
import { LanguageProvider } from './components/Context/language';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store={store}>
  <React.StrictMode>
    <LanguageProvider>
    <ThemeProvider>
<App/>
</ThemeProvider>
</LanguageProvider>
    </React.StrictMode>
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
