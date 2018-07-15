import { connect } from 'react-redux';
import { reset } from '../actions';
import Button from './Button';

const mapDispatchToProps = (
  dispatch,
) => ({
  onClick: () => {
    dispatch(reset());
  }
});

const ButtonReset = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ButtonReset;