import { FunctionComponent } from "react";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";

const Caption: FunctionComponent<{ text: string }> = ({ text }) => (
	<CaptionText>
		<em>{text}</em>
	</CaptionText>
);

export default Caption;

const CaptionText = styled.div`
	em {
		font-size: 18px;
		color: ${({ theme }): string => theme.tietary};
		margin-top: 20px;
		margin-top: 140px;

		${media.thone`font-size: 11px; margin-bottom: 84px;`}
	}
`;
