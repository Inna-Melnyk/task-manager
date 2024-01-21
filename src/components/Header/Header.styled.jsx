import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CommonContainer } from 'globalStyles/CommonContainer.styled';
import { FaTasks } from 'react-icons/fa';

export const HeaderContainer = styled(CommonContainer)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #dedbdb;
  border: none;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 20px;
`;

export const Logo = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    color: #f44336;
  }
`;

export const Icon = styled(FaTasks)`
     fill: #f44336;

`;


export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #f44336;
    font-weight: bold;
  }
`;
