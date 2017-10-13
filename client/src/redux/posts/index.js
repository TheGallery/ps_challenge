import { Map, List, fromJS } from 'immutable';

import * as actions from '../actionTypes';

export function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts());

    fetch('/posts')
      .then(res => res.json())
      .then(posts => dispatch(receivePosts(posts)))
      // In a real application we'd show the error in the UI.
      .catch(err => console.error(err));
  };
}

export function requestPosts () {
  return {
    type: actions.REQUEST_POST
  };
}

export function receivePosts (posts) {
  return {
    type: actions.RECEIVE_POST,
    posts
  };
}

// Normally this would be a redux thunk since
// we'd be posting the data on the server.
export function submitPost (post) {
  return {
    type: actions.SUBMIT_POST,
    post
  };
}

export function hidePost (postId) {
  return {
    type: actions.HIDE_POST,
    field: 'hidden',
    postId
  };
}

export function likePost (postId) {
  return {
    type: actions.LIKE_POST,
    field: 'liked',
    postId
  };
}

const initState = Map({
  fetching: false,
  items: List()
});

export default function reducer (posts = initState, action) {
  switch (action.type) {
    case actions.REQUEST_POST:
      return posts.set('fetching', true);
    case actions.RECEIVE_POST:
      return posts
        .set('fetching', false)
        .set('items', fromJS(action.posts));
    case actions.SUBMIT_POST:
      return posts.set('items',
        posts.get('items').unshift(Map({
          avatar: 'http://localhost:8000/static/avatar.png',
          liked: false,
          name: 'Joseph P',
          post: action.post,
          postId: Math.floor(Math.random() * 9999 + 1)
        }))
      );
    case actions.LIKE_POST:
    case actions.HIDE_POST:
      return posts.updateIn(['items',
        posts.get('items').findIndex(post => {
          return post.get('postId') === action.postId;
        })],
        function (post) {
          return post.set(action.field, !post.get(action.field));
        }
      );
    default:
      return posts;
  }
}
