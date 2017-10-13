import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

import { submitPost } from '../../redux/posts';

import Button from '../Button';

const Root = glamorous.div({
  width: '100%',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  boxSizing: 'border-box',
  marginTop: '50px',
  background: 'white',
  border: 'none',
  boxShadow: '0px 3px 3px -3px #7b7b7b'
});

const PostInput = glamorous.textarea({
  height: '70px',
  marginBottom: '10px',
  fontFamily: 'inherit',
  fontSize: '1.2rem',
  outline: 'none',
  resize: 'none',
  padding: '10px',
  border: 'none',
  ':focus': {
    boxShadow: 'inset 0 0 1px 1px #e6e6e6'
  }
});

class Compose extends Component {
  state = {
    post: ''
  };

  onPostInputChange = ({target}) => {
    this.setState({
      post: target.value
    });
  };

  onPostSubmit = () => {
    if (this.state.post.length) {
    this.props.submitPost(this.state.post);
    
    this.setState({
      post: ''
    });
    }
  }

  render () {
    return (
      <Root>
        <PostInput
          value={this.state.post}
          placeholder='This is my status update'
          onChange={this.onPostInputChange}
        />
        <Button onClick={this.onPostSubmit} alignFlexCol='end' primary>
          Post Update
        </Button>
      </Root>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    submitPost: post => dispatch(submitPost(post))
  };
}

export default connect(null, mapDispatchToProps)(Compose);
