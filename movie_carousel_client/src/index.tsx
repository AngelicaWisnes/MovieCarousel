import React from 'react';
import ReactDOM from 'react-dom/client';
import { tShapeAlgorithm } from './other/t_shape';
import Carousel from './Components/Carousel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

tShapeAlgorithm()

root.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>
);

