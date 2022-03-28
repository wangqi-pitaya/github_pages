import React from 'react'
import { useRoutes } from 'react-router-dom';
import { onRouteBefore, routes, setRouteBefore, transforRoutes } from './router';

export default function App() {
  setRouteBefore(onRouteBefore);
  const element = useRoutes(transforRoutes(routes));
  return element;
}
