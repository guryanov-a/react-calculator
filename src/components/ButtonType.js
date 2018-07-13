import React from 'react';
import { connect } from 'react-redux';
import { type } from '../actions';
import Button from './Button';

const mapDispatchToProps = (
  dispatch,
  { value },
) => ({
  onClick: () => {
    dispatch(type(value));
  }
});

const ButtonType = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ButtonType;