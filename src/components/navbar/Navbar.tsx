import React from 'react';
import { Container, LeftCol, Logo, NavIcons, RightCol, Wrapper, IconContainer } from './navbar.styles';
import {AccountCircleOutlined, SettingsOutlined } from '@mui/icons-material/';

export const Navbar = () => {
  return <Container>
      <Wrapper>
          <LeftCol>
              <Logo>Genni</Logo>
          </LeftCol>
          <RightCol>
            <NavIcons>
            <IconContainer><SettingsOutlined /></IconContainer>
            <IconContainer><AccountCircleOutlined /></IconContainer>
                
            </NavIcons>
          </RightCol>
      </Wrapper>
  </Container>;
};
