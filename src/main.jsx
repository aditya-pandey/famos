// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import ReactGA from "react-ga4";

// import App from './App.jsx';
// import './styles.css';

// ReactGA.initialize("G-Y5WV73XLV6");

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './styles.css';
// 1. Import the ContentProvider we just created
import { ContentProvider } from './context/ContentContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the Provider around your Router */}
    <ContentProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContentProvider>
  </React.StrictMode>,
);