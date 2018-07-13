import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonType from './ButtonType';
import ButtonResult from './ButtonResult';
import ButtonReset from './ButtonReset';

const CalcApp = styled.div`
  padding: 5px;
`;

const Display = styled.div`
  background: #292929;
  color: #fff;
`;

const Keyboard = styled.div`
  display: grid;
  grid-gap: 5px;
`;

let App = ({ calcExpression }) => (
  <CalcApp>
    <Display>{ calcExpression }</Display>
    <Keyboard>
      <ButtonReset>AC</ButtonReset>
      <ButtonResult>=</ButtonResult>
      <ButtonType value="/">/</ButtonType>
      <ButtonType value="*">x</ButtonType>
      <ButtonType value="-">-</ButtonType>
      <ButtonType value="+">+</ButtonType>
      <ButtonType value="1">1</ButtonType>
      <ButtonType value="2">2</ButtonType>
      <ButtonType value="3">3</ButtonType>
      <ButtonType value="4">4</ButtonType>
      <ButtonType value="5">5</ButtonType>
      <ButtonType value="6">6</ButtonType>
      <ButtonType value="7">7</ButtonType>
      <ButtonType value="8">8</ButtonType>
      <ButtonType value="9">9</ButtonType>
      <ButtonType value="0">0</ButtonType>
      <ButtonType value=".">.</ButtonType>
    </Keyboard>
  </CalcApp>
);

const mapStateToProps = (state) => ({
  calcExpression: state,
});

App = connect(
  mapStateToProps,
)(App);

export default App;
