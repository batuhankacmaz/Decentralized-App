import {FaBars, FaBtc} from "react-icons/fa";
import {NavLink as Link} from "react-router-dom";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: #007cff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #c3cdd8;
  tr
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffff;
  }
  &:hover{
      color: #ffff;
      transition-duration: 0.2s;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-60%, 50%);
    font-size: 2.2rem;
    cursor: pointer;
  }
`;
export const Btc = styled(FaBtc)`
  display: block;
  color: #ffff;
  position: absolute;
  top: 10px;
  left: 0;
  transform: translate(50%, 40%);
  font-size: 2.5rem;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
