/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { Component, type ReactNode, type ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const sanitizeError = (e: unknown): string => {
  const msg = e instanceof Error ? e.message : String(e);
  return msg.replace(/\/[^\s]+/g, '[path]').replace(/[A-Za-z0-9]{20,}/g, '[redacted]').slice(0, 200);
};

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    console.error('Application error:', sanitizeError(error));
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Something went wrong</h2>
        <p>Please refresh the page.</p>
      </div>;
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
