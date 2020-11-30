import React from 'react';
import { hydrate, render } from 'react-dom';

import { GlobalStyles } from '@/GlobalStyles';
import { EntryRoute } from '@/routes';

const rootElement = document.getElementById('wrap');
if (rootElement?.hasChildNodes()) {
  hydrate((
    <React.Fragment>
      <GlobalStyles />
      <EntryRoute />
    </React.Fragment>
  ), rootElement);
} else {
  render((
    <React.Fragment>
      <GlobalStyles />
      <EntryRoute />
    </React.Fragment>
  ), rootElement);
}
