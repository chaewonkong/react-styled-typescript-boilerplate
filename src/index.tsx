import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from '@/GlobalStyles';
import { EntryRoute } from '@/routes'

const MockRoute = () => <div>hi</div>;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <EntryRoute />
  </React.StrictMode>,
  document.getElementById('wrap'),
);
