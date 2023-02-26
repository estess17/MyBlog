import React from 'react';
import styled from 'styled-components';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Container } from '../ui';

const StyledFooter = styled.footer`
  border-top: 1px solid #ccc;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Links = styled.div`
  cursor: pointer;
`;

const Link = styled.a.attrs({ href: '/' })`
  margin-left: 20px;
  cursor: pointer;
  color: inherit;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <span>© 2023 Nikita Panagoda. All Rights Reserved.</span>
          <Links>
            <Link>
              <AiFillGithub size={21} />
            </Link>
            <Link>
              <AiFillLinkedin size={21} />
            </Link>
            <Link>
              <AiOutlineMail size={21} />
            </Link>
          </Links>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};
