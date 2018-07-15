import { OPERATION } from '../constants';

export const operation = (char) => ({
  type: OPERATION,
  char,
});