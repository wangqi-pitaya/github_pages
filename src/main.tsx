import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { onRouteBefore, routes, setRouteBefore, transforRoutes } from '@/router';
import './index.css'

function App() {
  setRouteBefore(onRouteBefore);
  const element = useRoutes(transforRoutes(routes));
  return element;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
