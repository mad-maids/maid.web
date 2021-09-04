import Head from "next/head";
import { FunctionComponent } from "react";

interface SEOMetaProps {
	title: string;
	description: string;
	keywords?: string;
	data: Record<string, any>;
}

const SEOMeta: FunctionComponent<SEOMetaProps> = ({ description, title, keywords, data }) => {
	const metaDescription = description || data.description;

	const metaTitle = title || data.title;

	return (
		<Head>
			<title>{metaTitle}</title>
			<meta name="description" content={metaDescription} />
			<meta name="keywords" content={keywords} />
		</Head>
	);
};

export default SEOMeta;
