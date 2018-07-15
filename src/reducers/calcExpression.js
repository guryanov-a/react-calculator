import math from 'mathjs';
import { TYPE, RESULT, RESET, DECIMAL, OPERATION } from '../constants';

const addNumber = (str, char) => {
  if (str === '0') {
    return char;
  }

  return str + char;
};

const addDecimal = (str) => {
  const strWithDot = `${str}.`;
  const strPurifiedFromConsequetiveDots = strWithDot.replace(/([\d]+[.])([.])$/, '$1');
  const strPurifiedFromRepeatedDots = strPurifiedFromConsequetiveDots.replace(/([\d]+[.][\d]+)([.])$/, '$1');

  return strPurifiedFromRepeatedDots;
};

const addOperation = (str, char) => {
  const strWithOperation = `${str}${char}`;
  const strWithReplacedOperation = strWithOperation.replace(/(.+)+[-+/*]{2}$/, `$1${char}`);

  return strWithReplacedOperation;
};

const calcExpression = (state = '0', { type, char }) => {
  switch(type) {
    case TYPE:
      return addNumber(state, char);
    case RESULT:
      return math.eval(state);
    case RESET:
      return '0';
    case DECIMAL:
      return addDecimal(state);
    case OPERATION:
      return addOperation(state, char);
    default:
      return state;
  }
};

export default calcExpression;