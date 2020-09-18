import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
	background: #fff;
	color: white;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavbarLeft = styled.div`
	display: flex;
`;

export const NavLogo = styled(Link)`
	color: #000000;
	justify-content: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(FaMagento)`
	margin-right: 0.5rem;
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	left: -10%;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		background: #5cbcd2;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #eaf6f9;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #000000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3ease;
		}
	}
`;

export const NavRight = styled.ul`
	display: flex;
	left: -10%;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 0;
		transition: all 0.5s ease;
		background: #5cbcd2;
	}
`;

export const NavMasuk = styled(Link)`
	text-decoration: none;
	display: flex;
	color: orange;
	padding: 0.5rem 1rem;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3ease;
		}
	}
`;

export const NavDaftar = styled(Link)`
	text-decoration: none;
	background: #fc8047;
	border-radius: 1.5rem;
	color: #fff;
	display: flex;
	padding: 0.5rem 1rem;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3ease;
		}
	}
`;

export const NavLogin = styled.li`
	display: flex;
	align-items: center;
`;

/*  */

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
		justify-content: space-between;
    flex-direction: column;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

export const NavBtnWrap = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 15rem;
  @media screen and (max-width: 960px) {
  margin-right: auto;
  margin-left: auto;
  top: 0;
  display: inline;
  width: 100%;
  }
`
