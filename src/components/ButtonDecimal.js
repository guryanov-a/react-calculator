import { connect } from 'react-redux';
import { decimal } from '../actions';
import Button from './Button';

const mapDispatchToProps = (
  dispatch,
  { value },
) => ({
  onClick: () => {
    dispatch(decimal(value));
  }
});

const ButtonType = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ButtonType;