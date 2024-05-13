// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createServer } from 'miragejs';
import { ROUTES } from './routes';

const queryClient = new QueryClient();

createServer({
  routes() {
    this.namespace = '/api';

    this.get('/movies', () => {
      return {
        movies: [
          { id: 1, title: 'Movie 1', posterImg: 'url1', releaseYear: 2020, genre: 'Action' },
          { id: 2, title: 'Movie 2', posterImg: 'url2', releaseYear: 2021, genre: 'Comedy' },
          { id: 3, title: 'Movie 3', posterImg: 'url3', releaseYear: 2019, genre: 'Drama' }
        ]
      };
    });

    this.post('/movies', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.db.movies.insert(attrs);
    });

    this.delete('/movies/:id', (schema, request) => {
      let id = request.params.id;
      schema.db.movies.remove(id);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

setupListeners(store.dispatch);
