/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rangeParser from "parse-numeric-range";
import { FunctionComponent } from "react";
import useSWR from "swr";
import styled from "@emotion/styled";

import styles from "../styles/skeleton.module.css";
import fetcher from "../lib/fetcher";

interface CodeProps {
  language?: any;
  highlightedLines?: any;
  className?: any;
  style?: any;
  id?: number;
}

const CodeBlock: FunctionComponent<CodeProps> = (props) => {
  const snippetContent = props.children;
  const language = props.language || "";

  const highlightedLines = props.highlightedLines
    ? rangeParser.parse(props.highlightedLines)
    : [];

  // Filter out any empty lines at end
  // @ts-ignore
  const reversedLines = snippetContent.split("\n").reverse();
  const firstNonEmptyIndex = reversedLines.findIndex((line) => line !== "");
  const lines = reversedLines
    .filter((line, index) => index >= firstNonEmptyIndex)
    .reverse();
  return (
    <SyntaxHighlighter
      style={theme}
      language={language}
      className={`language-${language}`}
      wrapLines
      lineProps={(lineNumber): any => {
        // @ts-ignore
        // eslint-disable-next-line no-shadow
        const props = {};
        if (highlightedLines.includes(lineNumber)) {
          // @ts-ignore
          props.style = {
            background: "#343b46", // dark:303641 bright:3D4452 medium: ##343b46
          };
        }
        return props;
      }}
    >
      {lines.join("\n")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

export const CodeSkeleton: FunctionComponent = () => (
  <div style={{ width: "100%" }}>
    <CodeSkeletonWrapepr>
      <CodeSkeletonItem height="1.4rem" className={styles.skeleton} />
      <CodeSkeletonItem height="5rem" className={styles.skeleton} />
      <CodeSkeletonItem height="5rem" className={styles.skeleton} />
      <CodeSkeletonItem height="1.4rem" className={styles.skeleton} />
      <CodeSkeletonItem height="3rem" className={styles.skeleton} />
    </CodeSkeletonWrapepr>
  </div>
);

const CodeSkeletonWrapepr = styled.div`
  border: 1px solid #333333;
  padding: 20px;
  border-radius: 0.5rem;
`;

const CodeSkeletonItem = styled.div<{ height: string }>`
  padding-bottom: 4rem;
  height: ${({ height }): string => height};
`;

export const ImportedCode: FunctionComponent<CodeProps> = (props): any => {
  const { error, data } = useSWR(`/api/get-snippet?id=${props.id}`, fetcher);
  const snippet = data?.snippet;

  if (error) return "An error has occurred.";
  if (data) {
    const snippetContent = snippet.content || "";
    const language = snippet.syntax.name || "";

    const highlightedLines = props.highlightedLines
      ? rangeParser.parse(props.highlightedLines)
      : [];

    // Filter out any empty lines at end
    // @ts-ignore
    const reversedLines = snippetContent.split("\n").reverse();
    const firstNonEmptyIndex = reversedLines.findIndex((line) => line !== "");
    const lines = reversedLines
      .filter((line, index) => index >= firstNonEmptyIndex)
      .reverse();
    return (
      <SyntaxHighlighter
        style={theme}
        language={language}
        className={`language-${language}`}
        wrapLines
        lineProps={(lineNumber): any => {
          // @ts-ignore
          // eslint-disable-next-line no-shadow
          const props = {};
          if (highlightedLines.includes(lineNumber)) {
            // @ts-ignore
            props.style = {
              background: "#343b46", // dark:303641 bright:3D4452 medium: ##343b46
            };
          }
          return props;
        }}
      >
        {lines.join("\n")}
      </SyntaxHighlighter>
    );
  }

  return <CodeSkeleton />;
};

const colors = {
  green: "#8CC570",
  purple: "#D373E3",
  red: "#F16372",
  gray: "#858585",
  darkGray: "#444444",
  yellow: "#DB975C",
  brightYellow: "#ECBE70",
  blue: "#40B1F5",
  cyan: "#19B9C4",
  orange: "#DB975C",
};

const theme = {
  'code[class*="language-"]': {
    color: colors.gray,
    direction: "ltr",
    textAlign: "left",
    fontSize: "1em",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: colors.gray,
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    fontSize: "1em",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    background: "#111111",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#282c34",
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: colors.darkGray,
    fontStyle: "italic",
  },
  prolog: {
    color: colors.darkGray,
  },
  doctype: {
    color: colors.darkGray,
  },
  cdata: {
    color: colors.darkGray,
  },
  punctuation: {
    color: colors.gray,
  },
  block: {
    display: "inline", // needed to ovverride tailwind's block class
  },
  ".namespace": {
    Opacity: ".7",
  },
  "property-access": {
    color: colors.blue,
  },
  property: {
    color: colors.red,
  },
  keyword: {
    color: colors.purple,
  },
  tag: {
    color: colors.red,
  },
  "maybe-class-name": {
    color: colors.red,
  },
  "class-name": {
    color: colors.brightYellow,
  },
  boolean: {
    color: colors.orange,
  },
  constant: {
    color: colors.orange,
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#f92672",
  },
  number: {
    color: colors.yellow,
  },
  selector: {
    color: colors.green,
  },
  "attr-name": {
    color: colors.green,
  },
  string: {
    color: colors.green,
  },
  char: {
    color: colors.green,
  },
  builtin: {
    color: colors.green,
  },
  inserted: {
    color: colors.green,
  },
  variable: {
    color: colors.red,
  },
  operator: {
    color: colors.cyan,
  },
  entity: {
    color: colors.brightYellow,
    cursor: "help",
  },
  url: {
    color: colors.red,
  },
  ".language-css .token.string": {
    color: "#87C38A",
  },
  ".style .token.string": {
    color: "#87C38A",
  },
  atrule: {
    color: colors.brightYellow,
  },
  "attr-value": {
    color: colors.brightYellow,
  },
  function: {
    color: colors.blue,
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
    color: colors.darkGray,
  },
};
