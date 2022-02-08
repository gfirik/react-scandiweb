import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
