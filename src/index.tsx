import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from '@/GlobalStyles';

const MockRoute = () => <div>hi</div>;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MockRoute />
  </React.StrictMode>,
  document.getElementById('wrap'),
);
