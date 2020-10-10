import React from 'react';

import { ErrorView } from './ErrorView';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error;
  errorInfo: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: null as unknown as Error,
    errorInfo: null as unknown as React.ErrorInfo,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return <ErrorView onRetry={() => location.reload()} />;
    }

    return this.props.children;
  }
}
