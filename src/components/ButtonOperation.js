import { connect } from 'react-redux';
import { operation } from '../actions';
import Button from './Button';

const mapDispatchToProps = (
  dispatch,
  { value },
) => ({
  onClick: () => {
    dispatch(operation(value));
  }
});

const ButtonOperation = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ButtonOperation;