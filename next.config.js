/* eslint-disable global-require */
const readingTime = require("reading-time");
const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const withFonts = require("nextjs-fonts");

const mdxConfig = {
  layoutPath: "layouts",
  defaultLayout: true,
  remarkPlugins: [
    // require('remark-autolink-headings'),
    require("remark-slug"),
    require("remark-code-titles"),
    require("remark-unwrap-images"),
    // require('./utils/title-style')
  ],
  rehypePlugins: [],
  extendFrontMatter: {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
  },
};

module.exports = withPlugins([
  withFonts,
  withMdxEnhanced(mdxConfig),
  {
		async redirects() {
			return [
				{
					source: "/discord",
					destination: "/api/discord",
					permanent: true,
				},
			];
		},
    env: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      apiUrl: process.env.API_URL,
    },
  },
]);
