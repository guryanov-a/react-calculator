import { connect } from 'react-redux';
import { result } from '../actions';
import Button from './Button';

const mapDispatchToProps = (
  dispatch,
) => ({
  onClick: () => {
    dispatch(result());
  }
});

const ButtonResult = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ButtonResult;