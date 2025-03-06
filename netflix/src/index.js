import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx'
import Body from './Body.jsx';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx'
import Footer from './Footer.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

