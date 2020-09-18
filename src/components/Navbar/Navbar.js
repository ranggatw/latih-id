import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { ThemeProvider } from "styled-components";
// import { NavLink } from "react-router-dom";
import { Button } from "../../GlobalStyles";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavbarLeft,
	NavItemBtn,
	NavBtnLink,
	NavBtnWrap,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	// const theme = {
	// 	main: "mediumseagreen",
	// };

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<IconContext.Provider value={{ color: "#000" }}>
				<Nav>
					<NavbarContainer>
						<NavbarLeft>
							<NavLogo to="/" onClick={closeMobileMenu}>
								<NavIcon />
								Latih ID
							</NavLogo>
							<MobileIcon onClick={handleClick}>
								{click ? <FaTimes /> : <FaBars />}{" "}
							</MobileIcon>
							<NavMenu onClick={handleClick} click={click}>
								<NavItem>
									<NavLinks to="/program" onClick={closeMobileMenu}>Program</NavLinks>
								</NavItem>
								<NavItem>
									<NavLinks to="/artikel" onClick={closeMobileMenu}>Artikel</NavLinks>
								</NavItem>
								<NavItem>
									<NavLinks to="/tentang-kami" onClick={closeMobileMenu}>Tentang Kami</NavLinks>
								</NavItem>
								<NavItem>
									<NavLinks to="/kolaborasi" onClick={closeMobileMenu}>Kolaborasi</NavLinks>
								</NavItem>
								<NavItem>
									<NavLinks to="/bantuan" onClick={closeMobileMenu}>Bantuan</NavLinks>
								</NavItem>
								<NavItemBtn>
									{button ? (
										<NavBtnWrap>
											<NavBtnLink to="/login">
												<Button primary>Masuk</Button>
											</NavBtnLink>
											<NavBtnLink to="/sign-up">
												<Button >Daftar</Button>
											</NavBtnLink>
										</NavBtnWrap>
									) : (
										<NavBtnWrap>
											<NavBtnLink to="/login" onClick={closeMobileMenu}>
												<Button primary>Masuk</Button>
											</NavBtnLink>
											<NavBtnLink to="/sign-up" onClick={closeMobileMenu}>
												<Button>Daftar</Button>
											</NavBtnLink>
										</NavBtnWrap>
									)}
								</NavItemBtn>
							</NavMenu>
						</NavbarLeft>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
