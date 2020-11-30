import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from '@/components/error-boundary';

const Dummy = () => <div>Dummy</div>;

export const EntryRoute = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Switch>
        <Route path='/' component={ Dummy } />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);
