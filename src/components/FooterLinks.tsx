import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

import * as pallete from "../utils/variables";
import { useStoreState } from "../store/hooks";

interface SocialProps {
	onCursor: (cursorType: string | void) => void;
}

const Social: FunctionComponent<SocialProps> = ({ onCursor }) => {
	const plugs = useStoreState((state) => state.plugs);

	return (
		<SocialLink>
			<div>
				{/* <h4 style={{ textTransform: 'initial' }}>
          Where to find me on the internet
        </h4> */}
				<p>
					{plugs.map((s, idx) => (
						<React.Fragment key={s.name}>
							<a
								href={s.href}
								className={s.className}
								target="_blank"
								rel="noopener noreferrer"
								onMouseEnter={(): void => onCursor("hovered")}
								onMouseLeave={(): void => onCursor()}
							>
								{s.name}
							</a>
							{idx === plugs.length - 1 ? "" : <span> / </span>}
						</React.Fragment>
					))}
				</p>
			</div>
		</SocialLink>
	);
};

export default Social;

const SocialLink = styled.div`
	display: flex;
	p {
		font-size: 14px;
	}

	a {
		border-radius: 0.2rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		padding-right: 0.5rem;
		color: ${(props): string => props.theme.tietary};
		&:focus {
			box-shadow: 0 0 0 3px rgba(96, 96, 96, 0.6);
		}
	}
	.Instagram {
		transition: 150ms all ease-in;
		&:hover {
			transition: 150ms all ease-in;
			color: ${pallete.ORANGE};
		}
	}

	.Dribbble {
		transition: 150ms all ease-in;
		&:hover {
			transition: 150ms all ease-in;
			color: ${pallete.PINK};
		}
	}

	.Behance {
		transition: 150ms all ease-in;
		&:hover {
			transition: 150ms all ease-in;
			color: ${pallete.SEA_BLUE};
		}
	}

	.Twitter {
		transition: 150ms all ease-in;
		&:hover {
			transition: 150ms all ease-in;
			color: ${pallete.LIGHT_BLUE};
		}
	}

	.Github {
		transition: 150ms all ease-in;
		&:hover {
			transition: 150ms all ease-in;
			color: ${pallete.PURPLE};
		}
	}
`;
