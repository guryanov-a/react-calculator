import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 5px;
  background: #ccc;
  color: #fff;
`;

const Button = ({ children, onClick }) => (
  <ButtonStyled
    type="button"
    onClick={ onClick }
  >
    { children }
  </ButtonStyled>
);

export default Button;