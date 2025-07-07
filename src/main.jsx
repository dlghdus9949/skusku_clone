// src/main.jsx (or src/index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter를 여기서 임포트해야 합니다.
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* App 컴포넌트를 BrowserRouter로 감싸줍니다. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
