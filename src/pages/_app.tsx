import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import React, { useEffect, useState, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { StoreProvider } from "easy-peasy";

import Layout from "../components/Layout";
import { GlobalStyles } from "../styles";
import MDXComponents from "../components/MDXComponents";
import store from "../store";

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function handleExitComplete(): void {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <StoreProvider store={store}>
      <Layout>
        <MDXProvider components={MDXComponents}>
          <CacheProvider value={cache}>
            <GlobalStyles />
            <AnimatePresence
              exitBeforeEnter
              // initial={false}
              onExitComplete={handleExitComplete}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </CacheProvider>
        </MDXProvider>
      </Layout>
    </StoreProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }
  return body;
};

export default MyApp;
