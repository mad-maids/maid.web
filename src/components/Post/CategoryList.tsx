import { FunctionComponent } from "react";
import styled from "@emotion/styled";

import capitalize from "../../utils/capitalize";
import * as pallete from "../../utils/variables";
import { media } from "../../styles/styles-utils";

interface PostCategoryListProps {
  categories: string[];
}

const cssSafe = (str: string): string =>
  encodeURIComponent(str.toLowerCase()).replace(/%[0-9A-F]{2}/gi, "");

const Pill: FunctionComponent<PostCategoryListProps> = ({ categories }) => (
  <>
    {categories.map((category, idx) => (
      <PillBlock key={idx} className={`pill--${cssSafe(category)}`}>
        {capitalize(category)}
        {idx === categories.length - 1 ? "" : <span>/</span>}
      </PillBlock>
    ))}
  </>
);

export default Pill;

const PillBlock = styled.div`
  display: inline-block;
  justify-content: center;
  /* font-size: 14px; */
  /* padding: 6px 14px; */
  border-radius: 20px;
  font-family: ${pallete.SECONDARY_FONT};

  color: white;
  ${media.thone`font-size:12px; padding: 4px 10px; border-radius: 6px;`}
  span {
    padding: 0 4px;
  }
`;
