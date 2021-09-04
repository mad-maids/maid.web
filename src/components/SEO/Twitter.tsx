import Head from "next/head";
import { FunctionComponent } from "react";

interface TwitterProps {
  twitterCard: string;
  twitterSite: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterHandle: string;
}

const Twitter: FunctionComponent<TwitterProps> = ({
  twitterCard,
  twitterSite,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterHandle,
}) => (
  <Head>
    <meta name="twitter:card" content={twitterCard} />
    <meta name="twitter:site" content={twitterSite} />
    <meta name="twitter:title" content={twitterTitle} />
    <meta name="twitter:description" content={twitterDescription} />
    <meta name="twitter:image" content={twitterImage} />
  </Head>
);

export default Twitter;
