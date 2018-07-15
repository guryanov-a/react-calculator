import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonType from './ButtonType';
import ButtonDecimal from './ButtonDecimal';
import ButtonResult from './ButtonResult';
import ButtonReset from './ButtonReset';
import ButtonOperation from './ButtonOperation';

const CalcApp = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 5px;
`;

const Display = styled.div`
  height: 30px;
  background: #292929;
  color: #fff;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
`;

const Keyboard = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
`;

const Numbers = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-column: 1 / 4;
  grid-row: 2 / 5;
`;

const ButtonZero = styled(ButtonType)`
  grid-column: 1 / 3;
`;

const ButtonResetStyled = styled(ButtonReset)`
  grid-column: 1 / 3;
`;

const ButtonPlus = styled(ButtonOperation)`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

const ButtonSubtract = styled(ButtonOperation)`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

const ButtonMultiply = styled(ButtonOperation)`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
`;

const ButtonDivide = styled(ButtonOperation)`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
`;

const ButtonResultStyled = styled(ButtonResult)`
  grid-column: 4 / 5;
  grid-row: 4 / 5;
`;

class App extends Component {
  render() {
    const {
      calcExpression,
    } = this.props;

    return (
      <CalcApp>
        <Display id="display">{ calcExpression }</Display>
        <Keyboard>
          <ButtonResetStyled id="clear">AC</ButtonResetStyled>
          <ButtonResultStyled id="equals">=</ButtonResultStyled>
          <ButtonDivide id="divide" value="/">/</ButtonDivide>
          <ButtonMultiply id="multiply" value="*">x</ButtonMultiply>
          <ButtonSubtract id="subtract" value="-">-</ButtonSubtract>
          <ButtonPlus id="add" value="+">+</ButtonPlus>
          <Numbers>
            <ButtonType id="one" value="1">1</ButtonType>
            <ButtonType id="two" value="2">2</ButtonType>
            <ButtonType id="three" value="3">3</ButtonType>
            <ButtonType id="four" value="4">4</ButtonType>
            <ButtonType id="five" value="5">5</ButtonType>
            <ButtonType id="six" value="6">6</ButtonType>
            <ButtonType id="seven" value="7">7</ButtonType>
            <ButtonType id="eight" value="8">8</ButtonType>
            <ButtonType id="nine" value="9">9</ButtonType>
            <ButtonZero id="zero" value="0">0</ButtonZero>
            <ButtonDecimal id="decimal">.</ButtonDecimal>
          </Numbers>
        </Keyboard>
      </CalcApp>
    );
  }

  componentDidMount() {
    const $script = require('scriptjs');

    $script('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js');
  }
}

const mapStateToProps = (state) => ({
  calcExpression: state,
});

App = connect(
  mapStateToProps,
)(App);

export default App;
