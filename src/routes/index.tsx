import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from '@/components/error-boundary';

const Dummy = () => {
  useEffect(() => {
    console.log('error')
    throw new Error('a error')
  }, [])
  return (<div>Dummy</div>)
}

export const EntryRoute = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Switch>
        <Route path='/a' component={Dummy} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);
