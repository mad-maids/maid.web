import styled from "@emotion/styled";
import { FunctionComponent } from "react";

import useCursor from "../hooks/useCursor";
import { useStoreState } from "../store/hooks";

import Navigation from "./Navigation";

const Header: FunctionComponent = () => {
	const isOpen = useStoreState((state) => state.isOpen);

	const { onCursor } = useCursor();

	return (
		<HeaderWrapper>
			<Navigation onCursor={onCursor} isOpen={isOpen} />
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	position: fixed;
	width: 100%;
	z-index: 9;

	backdrop-filter: saturate(180%) blur(20px);
	transition: background-color 0.1 ease-in-out;
`;
