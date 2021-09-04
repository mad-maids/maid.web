/* eslint-disable @typescript-eslint/ban-ts-ignore */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

import { media } from "../styles/styles-utils";
import { CORAL } from "../utils/variables";

import CodeBlock from "./Code";
import { CustomComponets } from "./CustomMDXComponents";

const MDXComponents = {
  ...CustomComponets,
  h2: (props): JSX.Element => <MDXHeading {...props} />,
  code: ({ className, children }): any => {
    const props = { children };
    const languageMatch = className && className.match("language-([^{]+)");
    if (languageMatch) {
      // @ts-ignore
      props.language = languageMatch[1];
    }
    const highlightedLinesMatch = className && className.match("{(.+)}");
    if (highlightedLinesMatch) {
      // @ts-ignore
      props.highlightedLines = highlightedLinesMatch[1];
    }

    return (
      <div>
        <CodeBlock {...props} />
      </div>
    );
  },
  p: (props): JSX.Element => <MDXText {...props} />,
  ul: (props): JSX.Element => <MDXList {...props} />,
  li: (props): JSX.Element => <MDXListItem {...props} />,
  blockquote: (props): JSX.Element => (
    <MDXBlockquote>{props.children}</MDXBlockquote>
  ),
  inlineCode: (props): JSX.Element => (
    <MDXInlineCode>{props.children}</MDXInlineCode>
  ),
  strong: (props): JSX.Element => <MDXText strong>{props.children}</MDXText>,
  a: ({ children, ...rest }): any => (
    // @ts-ignore
    <Link {...rest} passHref>
      <MDXLink target="_blank">{children}</MDXLink>
    </Link>
  ),
  hr: (): JSX.Element => <MDXHorizontalLine />,
  img: ({ ...rest }): JSX.Element => (
    <ImageContainer>
      <Image src={rest.src} unsized alt={rest.alt} />
    </ImageContainer>
  ),
};

export default MDXComponents;

const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 4px;
    margin: 0 auto;
    padding: 80px;
    ${media.tablet`padding: 40px;`}
    ${media.thone`padding: 0;`}
  }
`;

const MDXHorizontalLine = styled.hr`
  border-top: 1px solid #858585;
`;
const MDXHeading = styled.h2`
  padding-top: 68px;
  font-weight: inherit;
  margin-bottom: 28px;
  text-transform: uppercase;
`;
const MDXLink = styled.a`
  color: #444444;
  text-decoration: underline !important;
  &:hover {
    color: ${CORAL};
  }
  &:focus {
    box-shadow: 0 0 0 1px rgba(256, 256, 256, 0.6);
  }
`;
const MDXInlineCode = styled.code`
  display: inital;
  padding: 0.2rem;
  background: rgba(229, 229, 229, 0.06);
  color: #858585;
  border: 1px solid #444444;
`;
const MDXText = styled.p<{ strong: boolean }>`
  padding-bottom: 20px;
  font-weight: ${({ strong }): any => (strong ? 800 : "inherit")};
  color: ${(props): any => (props.strong ? "#858585" : props.theme.tietary)};
`;
const MDXList = styled.ul`
  padding: 0;
  margin-left: 20px;
`;
const MDXListItem = styled.li`
  margin-bottom: 15px;
  padding-left: 20px;
  &:before {
    content: "—";
    color: white;
    position: absolute;
    margin-left: -28px;
  }
`;
const MDXBlockquote = styled.blockquote`
  font-style: italic;
  border-left: 1px solid gray;
  padding-left: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  p {
    color: #858585;
  }
`;
