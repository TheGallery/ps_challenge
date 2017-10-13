import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import glamorous from 'glamorous';

import { likePost, hidePost } from '../../redux/posts';

import Post from './Post';

const Root = glamorous.div({
  'width': '100%',
  marginTop: '30px'
});

const Title = glamorous.div({
  color: 'white',
  fontSize: '1.7rem',
  marginBottom: '10px'
});

const PostContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 0',
  borderRadius: '5px',
  backgroundColor: 'white',
  marginBottom: '20px'
});

const Fetching = glamorous.div({
 color: '#fff',
 textAlign: 'center',
 fontSize: '1.2rem',
 marginTop: '30px'
});

const NoContent = glamorous.div({
  textAlign: 'center',
  padding: '20px 0'
});

class Posts extends Component {
  onLikeClick = (postId) => {
    this.props.likePost(postId);
  };

  onHideClick = (postId) => {
    this.props.hidePost(postId);
  };

  render () {
    const { isFetching, posts } = this.props;

    return (
      <Root>
        <Title>Latest Posts</Title>
        { 
          !isFetching
            ? <PostContainer>
              { 
                posts.size
                  ? posts.map(post => (
                      !post.get('hidden') && 
                      <Post
                        key={post.get('postId')}
                        post={post}
                        onLikeClick={this.onLikeClick.bind(null, post.get('postId'))}
                        onHideClick={this.onHideClick.bind(null, post.get('postId'))}
                      />
                    ))
                  : <NoContent>There are no posts here.</NoContent>
              }
              </PostContainer>
            : <Fetching>fetching posts...</Fetching>
        }
      </Root>
    );
  }
}

Posts.propTypes = {
  isFetching: PropTypes.bool,
  posts: PropTypes.instanceOf(Immutable.List).isRequired
};

function mapStatToProps (state) {
  // We only pass the visible posts
  return {
    isFetching: state.posts.get('fetching'),
    posts: state.posts.get('items').filter(post => !post.get('hidden'))
  };
}

function mapDispatchToProps (dispatch) {
  return {
    likePost: (postId) => dispatch(likePost(postId)),
    hidePost: (postId) => dispatch(hidePost(postId))
  };
}

export default connect(mapStatToProps, mapDispatchToProps)(Posts);
