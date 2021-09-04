import { FunctionComponent } from "react";
import Head from "next/head";

interface FacebookProps {
	facebookUrl: string;
	facebookType: string;
	facebookImage: string;
	facebookDescription: string;
	facebookTitle: string;
}

const Facebook: FunctionComponent<FacebookProps> = ({
	facebookUrl,
	facebookType,
	facebookTitle,
	facebookDescription,
	facebookImage,
}) => (
	<Head>
		<meta property="og:url" content={facebookUrl} />
		<meta property="og:type" content={facebookType} />
		<meta property="og:title" content={facebookTitle} />
		<meta property="og:description" content={facebookDescription} />
		<meta property="og:image" content={facebookImage} />
	</Head>
);

export default Facebook;
