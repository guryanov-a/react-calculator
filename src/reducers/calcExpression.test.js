import deepFreeze from 'deep-freeze';
import { type } from '../actions';
import calcExpression from './calcExpression';

test('2 after typed 3 becomes 23', () => {
  const stateBefore = '2';
  const action = type(3);
  const stateAfter = '23';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('after typed 3 becomes 3', () => {
  const stateBefore = '';
  const action = type(3);
  const stateAfter = '3';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('23 after typed . becomes 23.', () => {
  const stateBefore = '23';
  const action = type('.');
  const stateAfter = '23.';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});