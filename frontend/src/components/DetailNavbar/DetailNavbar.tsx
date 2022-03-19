import {Nav, NavUl, NavList} from './DetailNavbar.style';

const DetailNavbar = () => {
  return(
    <Nav>
      <NavUl>
        <NavList>객실</NavList>
        <NavList>편의시설</NavList>
        <NavList>리뷰</NavList>
      </NavUl>
    </Nav>
  )
}

export default DetailNavbar;