import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/newVyatsu">
      <Routes>
        <Route path="/" element={<App />} />
        {/* Добавьте другие маршруты здесь, если необходимо */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
