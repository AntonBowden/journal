import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import article from './reducers/article';
import JournalApp from './layouts/JournalApp';

const store = createStore(article);

render(
  <Provider store={store}>
    <JournalApp />
  </Provider>,
  document.getElementById('journalAppRoot')
);
