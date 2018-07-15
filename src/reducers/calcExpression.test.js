import deepFreeze from 'deep-freeze';
import { type, decimal, reset, operation } from '../actions';
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

test('23 after typed . becomes 23.', () => {
  const stateBefore = '23';
  const action = decimal();
  const stateAfter = '23.';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('23. after typed . should stay 23.', () => {
  const stateBefore = '23.';
  const action = decimal();
  const stateAfter = '23.';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('23 after reset should return 0', () => {
  const stateBefore = '23';
  const action = reset();
  const stateAfter = '0';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('after reset we should type 2 and instead of 0 calculator should display 2', () => {
  const stateBefore = '77';
  const actionReset = reset();
  const actionType = type('2');
  const stateAfter = '2';
  
  deepFreeze(stateBefore);
  deepFreeze(actionType);
  deepFreeze(actionReset);

  const stateAfterReset = calcExpression(stateBefore, actionReset);
  const stateAfterResetAndType = calcExpression(stateAfterReset, actionType);

  expect(
    stateAfterResetAndType,
  ).toEqual(stateAfter);
});

test('23 after reset should return 0', () => {
  const stateBefore = '23';
  const action = reset();
  const stateAfter = '0';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('23 after typed + should become 23+', () => {
  const stateBefore = '23';
  const action = operation('+');
  const stateAfter = '23+';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});

test('23+ after typed / should become 23/', () => {
  const stateBefore = '23+';
  const action = operation('/');
  const stateAfter = '23/';
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    calcExpression(stateBefore, action),
  ).toEqual(stateAfter);
});
