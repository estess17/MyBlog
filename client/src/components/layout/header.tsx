import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HiCode, HiMoon, HiSun } from 'react-icons/hi';
import { Container } from '../ui';

const StyledHeader = styled.header`
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(13.6px);
  -webkit-backdrop-filter: blur(13.6px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const ThemeSwitcher = styled.div`
  cursor: pointer;
`;

export const Header = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo>
            <HiCode size={32} />
          </Logo>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
