import { TYPE, RESULT, RESET } from '../constants';

const calcExpression = (state = '', { type, char }) => {
  switch(type) {
    case TYPE:
      return state + char;
    case RESULT:
      return eval(state);
    case RESET:
      return '';
    default:
      return state;
  }
};

export default calcExpression;