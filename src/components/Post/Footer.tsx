import { FunctionComponent } from "react";

interface Props {
  slug: string;
}

const PostFooter: FunctionComponent<Props> = ({ slug }) => {
  const editUrl = `https://github.com/leerob/leerob.io/edit/master/pages/blog/${slug}/index.mdx`;
  const discussUrl = `${encodeURIComponent(`https://t.me/madmaids`)}`;
  return (
    <div style={{ display: "flex" }}>
      <a href={discussUrl} rel="noreferrer" target="_blank">
        <p style={{ color: "#444444" }}>Discuss on Telegram</p>
      </a>
      <p>{` • `}</p>
      <a href={editUrl} rel="noreferrer" target="_blank">
        <p style={{ color: "#444444" }}>Edit on GitHub</p>
      </a>
    </div>
  );
};

export default PostFooter;
