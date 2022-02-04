import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #072227;
  height: 60px;
  position: sticky;
`;

export const Wrapper = styled.div`
  padding: 0px 100px;
  height: inherit;
  display: flex;
  justify-content: space-between;
`;
export const LeftCol = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.h3`
  font-size: ${(props) => props.theme.fontMedium};
  color: ${(props) => props.theme.lightGreen};
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
`;

export const NavIcons = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 10%;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  margin-right: 30px;
  color: ${(props) => props.theme.lightGreen};

  &:hover {
    color: #4fbdba;
  }
`;
