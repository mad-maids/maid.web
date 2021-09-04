import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";
import Arrow from "../../icons/arrow";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const n = 4;

const ScrollForMore: FunctionComponent = () => (
	<ScrollForMoreWrapper
		initial={{ opacity: 0, y: 20 }}
		animate={{
			opacity: 1,
			y: 0,
			transition: { delay: 1.5, ...transition },
		}}
		className="scroll-for-more"
	>
		<div className="column-1" style={{ display: "flex" }}>
			{[...Array(n)].map((_e, i) => (
				<Arrow key={i} />
			))}
		</div>
		<div className="column-2" style={{ display: "flex" }}>
			{[...Array(n)].map((_e, i) => (
				<Arrow key={i} />
			))}
		</div>
	</ScrollForMoreWrapper>
);

export default ScrollForMore;

const ScrollForMoreWrapper = styled(motion.div)`
	margin: 0 auto;
	max-width: 505px;
	${media.thone`max-width:360px;`}
	display: flex;
	justify-content: space-between;

	svg {
		stroke: ${(props): string => props.theme.tietary};
	}
`;
