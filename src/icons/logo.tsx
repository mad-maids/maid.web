import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
	padding: 0;
	width: 1.9rem;
	height: 32px;
`;
const Icon = () => (
	<SVG>
		<g>
			<path d="M0 0v32l3.453-3.457 11.045-11.06 11.049 11.064L29 32.004v-32zm3.453 22.773V6.417l8.167 8.178zm2.8-19.315h16.491L14.5 11.713zm11.123 11.137l8.168-8.179v16.359z" />
		</g>
	</SVG>
);

export default Icon;
