import { FunctionComponent } from "react";

import { useStoreState } from "../../store/hooks";

import Meta from "./Meta";
import Twitter from "./Twitter";
import Facebook from "./Facebook";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: FunctionComponent<SEOProps> = ({ title, description, keywords }) => {
  const siteMeta = useStoreState((state) => state.siteMeta);

  const metaDescription = description || siteMeta.description;
  const { twitter, facebook } = siteMeta.socialMedia;
  const {
    twitterHandle,
    twitterCard,
    twitterSite,
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = twitter;
  const {
    facebookUrl,
    facebookType,
    facebookTitle,
    facebookDescription,
    facebookImage,
  } = facebook;

  return (
    <>
      <Meta
        title={title}
        description={metaDescription}
        keywords={keywords}
        data={siteMeta}
      />

      <Twitter
        twitterCard={twitterCard}
        twitterTitle={twitterTitle}
        twitterDescription={twitterDescription}
        twitterImage={twitterImage}
        twitterSite={twitterSite}
        twitterHandle={twitterHandle}
      />
      <Facebook
        facebookUrl={facebookUrl}
        facebookType={facebookType}
        facebookTitle={facebookTitle}
        facebookDescription={facebookDescription}
        facebookImage={facebookImage}
      />
    </>
  );
};

export default SEO;
