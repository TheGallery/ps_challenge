import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Root = glamorous.button({
  border: 'none',
  padding: '8px',
  fontSize: '1.1rem',
  borderRadius: '5px',
  outline: 'none',
  ':hover, :focus': {
    backgroundColor: '#e8e8e8',
    cursor: 'pointer'
  }
}, (props) => {
  let styles = {};

  if (props.primary) {
    styles = {
      ...styles,
      backgroundColor: '#6cb5d0',
      color: 'white',
      ':hover, :focus': {
        backgroundColor: '#77b0c5'
      }
    };
  }

  if (props.alignFlexCol) {
    styles = {
      ...styles,
      alignSelf: props.alignFlexCol === 'start' ? 'flex-start' : 'flex-end'
    };
  }

  if (props.icon) {
    styles = {
      ...styles,
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
  }

  if (props.plain) {
    styles = {
      ...styles,
      backgroundColor: 'transparent',
      ':hover, :active': {
        backgroundColor: 'transparent',
        color: '#888'
      }
    };
  }

  return styles;
});

function Button (props) {
  return (
    <Root {...props} onClick={props.onClick}>
      {props.icon && <i className={`fa fa-${props.icon}`} />}
      {props.children}
    </Root>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  alignFlexCol: PropTypes.string
}

export default Button;
