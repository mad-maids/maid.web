import { FunctionComponent, useEffect } from "react";
import styled from "@emotion/styled";

import Switch from "../icons/switch";
import { useStoreActions, useStoreState } from "../store/hooks";

interface ColorSwitchProps {
	onCursor: (cursorType: string | void) => void;
}

const ColorSwitch: FunctionComponent<ColorSwitchProps> = ({ onCursor }) => {
	const currentTheme = useStoreState((state) => state.currentTheme);

	const setCurrentTheme = useStoreActions((state) => state.setCurrentTheme);

	const toggleTheme = (): void => {
		currentTheme === "dark" ? setCurrentTheme("light") : setCurrentTheme("dark");
	};

	useEffect(() => {
		window.localStorage.setItem("theme", currentTheme);
	}, [currentTheme]);

	return (
		<Wrapper
			onClick={toggleTheme}
			onMouseEnter={(): void => onCursor("pointer")}
			onMouseLeave={(): void => onCursor()}
			flip={currentTheme === "light"}
		>
			<Switch />
		</Wrapper>
	);
};

export default ColorSwitch;

const Wrapper = styled.button<{ flip: boolean }>`
	background: none;
	transform: scaleX(${(props): string => (props.flip ? "1" : "-1")});
	svg {
		fill: ${(props): string => props.theme.tietary};
	}
`;
