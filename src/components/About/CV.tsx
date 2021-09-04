import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";
import { useStoreState } from "../../store/hooks";

const CV: FunctionComponent = () => {
	const cvData = useStoreState((state) => state.cvData);

	const { experiences, experties, tools } = cvData;
	return (
		<Main>
			<LeftColumn>
				<HeadingCopy>
					<h2>education</h2>
				</HeadingCopy>
				<EntryItem>
					<Year>AUG 2015 — DEC 2019</Year>
					<p>B.F.A. Graphic Design - Liberty Univeristy</p>
				</EntryItem>
				<br />
				<br />
				<HeadingCopy>
					<h2>experience</h2>
				</HeadingCopy>
				{experiences.map(({ year, position }, i) => (
					<EntryItem key={i}>
						<Year>{year}</Year>
						<p>{position}</p>
					</EntryItem>
				))}
			</LeftColumn>
			<RightColumn>
				<Experties>
					<HeadingCopy style={{ paddingBottom: 20 }}>
						<h2>What I Do</h2>
					</HeadingCopy>
					<div>
						{experties.map((s, idx) => (
							<React.Fragment key={s.name}>
								{s.name}
								{idx === experties.length - 1 ? "" : <span> / </span>}
							</React.Fragment>
						))}
					</div>
				</Experties>
				<Tools>
					<HeadingCopy style={{ paddingBottom: 20 }}>
						<h2>Tools I Use</h2>
					</HeadingCopy>
					<div>
						{tools.map((s, idx) => (
							<React.Fragment key={s.name}>
								{s.name}
								{idx === tools.length - 1 ? "" : <span> / </span>}
							</React.Fragment>
						))}
					</div>
				</Tools>
			</RightColumn>
		</Main>
	);
};

export default CV;

const Experties = styled.h2`
	font-size: 1.45rem;
	margin: 0 20%;
	padding-bottom: 60px;
	text-transform: uppercase;
	span {
		margin: 0 0.625rem;
		color: ${(props): string => props.theme.tietary};
	}

	${media.tablet`font-size: 1rem;`}
	${media.desktop`margin: 0;`}
`;

const Tools = styled.h2`
	font-size: 1.45rem;
	text-transform: uppercase;
	margin: 0 20%;

	span {
		margin: 0 0.625rem;
		color: ${(props): string => props.theme.tietary};
	}
	${media.tablet`font-size: 1rem;`}
	${media.desktop`margin: 0;`}
`;

const Main = styled.div`
	padding: 10vw 10% 20px;
	display: grid;
	grid-template-columns: 1fr 2fr;
	${media.desktop`grid-template-columns: none;grid-template-rows: repeat(2, 1fr); `}
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
	${media.desktop`padding-top:100px;`}
`;

const HeadingCopy = styled.div`
	h2 {
		text-transform: uppercase;
		font-size: 48px;
	}
`;

const Year = styled.h2`
	font-size: 18px;
`;

const EntryItem = styled.div`
	padding: 20px 0;
`;
