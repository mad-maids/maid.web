// import Router from "next/router";
// import { useEffect, useState, FunctionComponent } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import useDimensions from "react-cool-dimensions";

// import styled from "@emotion/styled";
// import Icon from "../icons/logo";
// import useIsMounted from "../hooks/useIsMounted";

// interface NavigationProps {
// 	onCursor: (cursorType: string | void) => void;
// 	isOpen?: boolean;
// 	dispatch?: any;
// }

// const NavMenu: FunctionComponent<NavigationProps> = ({ onCursor }) => {
// 	const links = [
// 		{ key: "", href: "/work", label: "Work" },
// 		{ key: "", href: "/blog", label: "Blog" },
// 		{ key: "", href: "/collective", label: "Collective" },
// 	];

// 	const [hasActive, setHasActive] = useState(false);

// 	return (
// 		<ul style={{ marginLeft: "auto", display: "flex" }}>
// 			{links.map(({ label, href }, idx) => (
// 				<motion.li
// 					key={idx}
// 					onMouseEnter={(): void => onCursor("pointer")}
// 					onMouseLeave={(): void => onCursor()}
// 				>
// 					<Link href={href} scroll={false}>
// 						<a>
// 							<p>{label}</p>
// 						</a>
// 					</Link>
// 				</motion.li>
// 			))}
// 		</ul>
// 	);
// };

// const Navigation: FunctionComponent<NavigationProps> = ({ onCursor, isOpen, dispatch }) => {
// 	const [disabled, setDisabled] = useState(false);
// 	const isMounted = useIsMounted();

// 	const handleRouteChange = (): void => {
// 		if (isMounted.current) {
// 			onCursor();
// 			// dispatch({ type: "MENU_CLOSE" });
// 		}
// 	};

// 	// const handleMenu = (): void => {
// 	// 	disabledMenu();
// 	// 	dispatch({ type: "MENU_TOGGLE" });
// 	// 	onCursor();
// 	// };

// 	// const disabledMenu = (): void => {
// 	// 	setDisabled(!disabled);
// 	// 	setTimeout(() => {
// 	// 		setDisabled(false);
// 	// 	}, 800);
// 	// };

// 	useEffect(() => {
// 		Router.events.on("routeChangeComplete", handleRouteChange);

// 		// isOpen ? (document.body.style.position = "fixed") : (document.body.style.position = null);
// 	});

// 	// const handleFade = isOpen
// 	// 	? {
// 	// 			opacity: 1,
// 	// 			display: "block",
// 	// 			transition: {
// 	// 				delay: 1,
// 	// 				duration: 1,
// 	// 				ease: [0.6, 0.05, -0.01, 0.9],
// 	// 			},
// 	// 	  }
// 	// 	: {
// 	// 			opacity: 0,
// 	// 			transitionEnd: {
// 	// 				display: "none",
// 	// 			},
// 	// 			transition: {
// 	// 				duration: 1,
// 	// 				ease: [0.6, 0.05, -0.01, 0.9],
// 	// 			},
// 	// 	  };

// 	// const { ref, currentBreakpoint, width, height } = useDimensions<HTMLDivElement>({
// 	// 	breakpoints: { XS: 0, SM: 100, MD: 200, LG: 300, XL: 400 },
// 	// });

// 	return (
// 		<>
// 			<NavigationContainer>
// 				<MenuContainer>
// 					<Link href="/" passHref scroll={false}>
// 						<a aria-label="Home">
// 							<MenuLogo
// 								onMouseEnter={(): void => onCursor("pointer")}
// 								onMouseLeave={(): void => onCursor()}
// 							>
// 								<Icon />
// 							</MenuLogo>
// 						</a>
// 					</Link>

// 					<NavMenu onCursor={onCursor} />
// 				</MenuContainer>
// 			</NavigationContainer>
// 		</>
// 	);
// };

// export default Navigation;

// const NavigationContainer = styled.nav`
// 	padding: 0 14%;
// 	display: flex;
// 	border-right: none;
// 	width: 100%;
// 	height: 80px;
// 	align-items: center;
// `;

// const MenuContainer = styled(motion.div)`
// 	display: flex;
// 	align-items: center;
// 	width: 100%;

// 	li {
// 		padding-left: 60px;
// 		p {
// 			color: ${(props): string => props.theme.tietary};
// 			font-size: 16px;
// 		}
// 	}
// `;

// const MenuLogo = styled(motion.div)`
// 	svg {
// 		fill: ${(props): string => props.theme.tietary};
// 		transition: all 0.4s ease;
// 	}
// 	transition: all 0.4s ease;
// 	&:hover {
// 		transform: scale(0.9);
// 		transition: all 0.4s ease;
// 	}
// `;

import Router from "next/router";
import { useEffect, useState, FunctionComponent, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import Icon from "../icons/logo";
import useIsMounted from "../hooks/useIsMounted";
import * as pallete from "../utils/variables";
import { fadeInUp, fadeOutDown } from "../animations";
import { useStoreActions } from "../store/hooks";

import Social from "./FooterLinks";
import ColorSwitch from "./ColorSwitch";

interface NavigationProps {
	onCursor: (cursorType: string | false | void) => void;
	isOpen?: boolean;
	toggleTheme?: () => void;
}

const NavMenu: FunctionComponent<NavigationProps> = ({ onCursor, isOpen }) => {
	const links = [
		{ key: "", href: "/work", label: "Work" },
		{ key: "", href: "/blog", label: "Blog" },
		{ key: "", href: "/collective", label: "Collective" },
	];

	const [hasActive, setHasActive] = useState(false);

	const variants = {
		onEnter: {
			y: 3,
			skewX: 4,
			transition: { duration: 0, ease: [0.6, 0.05, -0.01, 0.9] },
		},
		onLeave: {
			y: -3,
			skewX: 0,
			transition: { duration: 0, ease: [0.6, 0.05, -0.01, 0.9] },
		},
	};

	return (
		<>
			<ul className="nav-menu">
				{links.map(({ label, href }, idx) => (
					<motion.li
						key={idx}
						variants={variants}
						initial="onLeave"
						whileHover="onEnter"
						onMouseEnter={(): void => onCursor("pointer")}
						onMouseLeave={(): void => onCursor()}
					>
						<Link href={href} scroll={false}>
							<a>
								<p>{label}</p>
							</a>
						</Link>
					</motion.li>
				))}
				<div style={{ paddingTop: 100 }}>
					<Social onCursor={onCursor} />
				</div>
			</ul>
		</>
	);
};

const Navigation: FunctionComponent<NavigationProps> = ({ onCursor, isOpen, toggleTheme }) => {
	const [disabled, setDisabled] = useState(false);
	const isMounted = useIsMounted();

	const setOpen = useStoreActions((state) => state.setOpen);

	const handleRouteChange = (): void => {
		if (isMounted.current) {
			onCursor();
			setOpen(false);
		}
	};

	const handleMenu = (): void => {
		disabledMenu();
		setOpen(!isOpen);
		onCursor();
	};

	const disabledMenu = (): void => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 800);
	};

	useEffect(() => {
		Router.events.on("routeChangeComplete", handleRouteChange);

		isOpen ? (document.body.style.position = "fixed") : (document.body.style.position = null);
	});

	const handleFade = isOpen
		? {
				opacity: 1,
				display: "block",
				transition: {
					delay: 1,
					duration: 1,
					ease: [0.6, 0.05, -0.01, 0.9],
				},
		  }
		: {
				opacity: 0,
				transitionEnd: {
					display: "none",
				},
				transition: {
					duration: 1,
					ease: [0.6, 0.05, -0.01, 0.9],
				},
		  };

	return (
		<>
			<NavigationContainer>
				<Link href="/" passHref scroll={false}>
					<a aria-label="Home">
						<MenuLogo onMouseEnter={(): void => onCursor("pointer")} onMouseLeave={(): void => onCursor()}>
							<Icon />
						</MenuLogo>
					</a>
				</Link>
				<div style={{ display: "flex", alignItems: "center" }}>
					<ColorSwitch onCursor={onCursor} />
					<Toggle
						disabled={disabled}
						open={isOpen}
						onClick={handleMenu}
						onMouseEnter={(): void => onCursor("pointer")}
						onMouseLeave={(): void => onCursor()}
					>
						<span />
						<span />
					</Toggle>
				</div>
			</NavigationContainer>
			<MenuContainer initial={{ opacity: 0 }} animate={handleFade}>
				<NavMenu onCursor={onCursor} isOpen={isOpen} />
			</MenuContainer>
		</>
	);
};

export default Navigation;

const NavigationContainer = styled.nav`
	padding: 0 14%;
	display: flex;
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: space-between;
`;

const MenuContainer = styled(motion.div)`
	position: fixed;
	width: 100%;
	height: 100vh;
	background: ${(props): string => props.theme.primary};
	z-index: 1;
	display: none;
	ul {
		list-style: none;
		position: absolute;
		padding: 100px 15vw;
		li {
			position: relative;
			width: fit-content;
			transition: all 0.4s ease;
			&:hover {
				p {
					-webkit-text-fill-color: ${(props): string => props.theme.tietary};
					-webkit-text-stroke-width: 0.4px;
					-webkit-text-stroke-color: transparent;
				}
			}
			p {
				font-size: 100px;
				text-transform: uppercase;
				color: ${(props): string => props.theme.tietary};
				font-family: ${pallete.PRIMARY_FONT};
				-webkit-text-fill-color: transparent;
				-webkit-text-stroke-width: 0.4px;
				-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
			}
		}
	}
`;

const MenuLogo = styled(motion.div)`
	svg {
		fill: ${(props): string => props.theme.tietary};
		transition: all 0.4s ease;
	}
	transition: all 0.4s ease;
	&:hover {
		transform: scale(0.9);
		transition: all 0.4s ease;
	}
`;

const Toggle = styled(motion.button)<{ open: boolean }>`
	transition: transform 0.3s;
	background: none;
	min-width: 1.8rem;
	height: 1.8rem;
	padding: 0.2rem;
	span {
		transition: all 0.3s;
		display: block;
		background: ${(props): string => props.theme.tietary};
		width: 100%;
		height: 2px;
	}
	span:first-of-type {
		transform: rotate(${({ open }): string => (open ? "45deg" : "0")})
			translateY(${({ open }): string => (open ? "0" : ".35rem")});
	}
	span:nth-of-type(2n) {
		position: relative;
		transform: rotate(${({ open }): string => (open ? "-45deg" : "0")})
			translateY(${({ open }): string => (open ? "0" : "-.35rem")});
		bottom: ${({ open }): string => (open ? "2px" : "0")};
	}
`;
