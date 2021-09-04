/* eslint-disable import/no-unresolved */
import React from "react";

import { frontMatter as blogPosts } from "../pages/posts/**/*.mdx";

const siteUrl = `https://maid.uz`;
const pathPrefix = `/posts/`;

const blogPostsRssXml = (filteredPosts) => {
	let latestPostDate = "";
	let rssItemsXml = "";
	filteredPosts.forEach((post) => {
		const postDate = Date.parse(post.date);
		if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
			latestPostDate = post.date;
		}
		rssItemsXml += `
        <item>
          <title>${post.title}</title>
          <link>
            ${siteUrl}${pathPrefix}${post.slug}
          </link>
          <pubDate>${post.date}</pubDate>
      </item>`;
	});
	return {
		rssItemsXml,
		latestPostDate,
	};
};

const getRssXml = (filteredPosts) => {
	const { rssItemsXml, latestPostDate } = blogPostsRssXml(filteredPosts);
	return `<?xml version="1.0" ?>
    <rss version="2.0">
      <channel>
          <title>Blog by Mad Maids</title>
          <link>https://www.bergqvist.it</link>
          
          <language>en</language>
          <lastBuildDate>${latestPostDate}</lastBuildDate>
          ${rssItemsXml}
      </channel>
    </rss>`;
};

export default class Rss extends React.Component {
	static async getInitialProps({ res }) {
		if (!res) {
			return;
		}
		const filteredPosts = blogPosts
			.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
			.filter((frontMatter) => frontMatter.published === true);
		res.setHeader("Content-Type", "text/xml");
		res.write(getRssXml(filteredPosts));
		res.end();
	}
}
