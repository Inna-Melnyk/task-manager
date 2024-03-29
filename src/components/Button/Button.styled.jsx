import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;

  &:hover {
    background-color: #1976d2;
    color: #fff;
  }

  &:active {
    background-color: #1565c0;
    color: #fff;
  }

  ${props =>
    props.isSelected &&
    ` background-color: #1976d2;
  color: #fff;
  `}
`;
