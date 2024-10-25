import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './styles/index.css';
import App from './components/App';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

// Set up Apollo Client
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Get the root element
const rootElement = document.getElementById('root');

// Render the App with ApolloProvider
if (rootElement) {
  const root = createRoot(rootElement); // Create a root
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
