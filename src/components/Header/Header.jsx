import { useNavigate } from 'react-router-dom';
import {
  HeaderNav,
  HeaderContainer,
  Logo,
  Icon,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderContainer>
        <Logo onClick={() => navigate('/')}>
          <Icon size={30} />
          <h2>Tasks Manager</h2>
        </Logo>
        <HeaderNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/tasks">Tasks</StyledLink>
          <StyledLink to="/weather">Weather</StyledLink>
        </HeaderNav>
      </HeaderContainer>
    </div>
  );
};
