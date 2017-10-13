import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import glamorous, { Div } from 'glamorous';

import Button from '../Button';

const Root = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  boxSizing: '20px',
  padding: '20px',
  borderBottom: 'solid 1px #ccc'
});

const Avatar = glamorous.img({
  height: '50px',
  width: 'auto',
  borderRadius: '50%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  marginRight: 'auto'
}, ({src}) => ({
  backgroundImage: `url(${src})`
}));

function Post ({post, onLikeClick, onHideClick}) {
  return (
    <Root>
      <Avatar src={post.get('avatar')} />
      <Div flex='1' margin='0 10px'>
        <Div fontWeight='bold'>{post.get('name')}</Div>
        <Div wordBreak='break-all'>{post.get('post')}</Div>
      </Div>
      <Div marginLeft='auto'>
        <Button
          icon={post.get('liked') ? 'heart' : 'heart-o' }
          onClick={onLikeClick}
          plain
        >
          Like
        </Button>
        <Button
          icon='eye-slash'
          onClick={onHideClick}
          plain
        >
          Hide
        </Button>
      </Div>
    </Root>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default Post;
