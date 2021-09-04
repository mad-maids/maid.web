/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable prefer-const */
import { useCallback, useRef, useState, useEffect, FunctionComponent } from "react";
import { ThemeProvider } from "@emotion/react";
import { animated as a, useSpring } from "react-spring";
import ResizeObserver from "resize-observer-polyfill";

import CustomCursor from "../shared/CustomCursor";
import { darkTheme, lightTheme } from "../styles/theme";
import { useStoreState } from "../store/hooks";

import Header from "./Header";

const Layout: FunctionComponent = ({ children }) => {
	const windowGlobal = (): boolean => typeof window !== "undefined";

	const scrollIntertia = 70;
	const [{ y }, set] = useSpring(() => ({
		y: [0],
		config: {
			mass: 1,
			tension: 200,
			friction: scrollIntertia,
			precision: 0.00001,
			velocity: 0,
			clamp: true,
		},
	}));

	const viewportRef = useRef(null);
	// @ts-ignore
	const [currentHeight, setCurrentHeight] = useState(windowGlobal.innerHeight);
	const getCurrentHeight = useCallback((entries) => {
		for (let entry of entries) {
			const crx = entry.contentRect;
			setCurrentHeight(crx.height);
		}
	}, []);

	useEffect(() => {
		const viewport = viewportRef.current;

		if (!viewport) return;
		let ro = new ResizeObserver((entries) => getCurrentHeight(entries));
		ro.observe(viewport);
		return (): void => {
			if (!ro) return;
			ro.disconnect();
		};
	}, [getCurrentHeight]);

	useEffect(() => {
		const handleScroll = (): void => set({ y: [-window.pageYOffset] });
		window.addEventListener("scroll", handleScroll);
		return (): void => window.removeEventListener("scroll", handleScroll);
	}, [set]);

	const currentTheme = useStoreState((state) => state.currentTheme);

	return (
		<ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
			<Header />
			<CustomCursor />
			<a.main
				style={{
					transform: y.interpolate((yVal) => `translate3d(0,${yVal}px,0)`),
				}}
				ref={viewportRef}
				className="scroll-container"
			>
				{children}
			</a.main>
			<div style={{ height: currentHeight }} />
		</ThemeProvider>
	);
};

export default Layout;
