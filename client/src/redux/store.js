import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { fetchPosts } from './posts';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

// Fetch post as soon as we have a store
store.dispatch(fetchPosts());

export default store;
