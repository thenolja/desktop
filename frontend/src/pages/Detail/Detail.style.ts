import styled from "styled-components";

const Nav = styled.nav`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 40px 0;
`;

const NavUl = styled.ul`
  display: flex;
  width: 500px;
`;

const NavList = styled.li`
  display: block;
  width: 100%;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  a{
    display: block;
    &:hover{
      background-color: #DE2E5F;
      color: #fff;
    }
  }
`;

const ActiveNavList = styled.li`
  display: block;
  width: 100%;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  color: #DE2E5F;
  
  a{
    display: block;
    &:hover{
      background-color: #DE2E5F;
      color: #fff;
    }
  }
`;

export {Nav, NavUl, NavList, ActiveNavList};